import {Component} from '@angular/core';
import {AgGridAngular} from 'ag-grid-angular';
import type {
  ColDef,
  RowDoubleClickedEvent,
  FilterChangedEvent,
  GridOptions,
  IDatasource,
  IGetRowsParams,
  GridReadyEvent,
  RowModelType,
} from 'ag-grid-community';
import {MatMiniFabButton} from '@angular/material/button';
import {MatTooltip} from '@angular/material/tooltip';
import {MatIcon} from '@angular/material/icon';
import {LoadingComponent} from '../../_common/loading-component/loading-component';
import {finalize} from 'rxjs';
import {ApiService} from '../../services/api/apiService';
import {CaseEntityStatusRoleDto} from '../../services/api/models/caseEntityStatusRoleDto';
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
ModuleRegistry.registerModules([ AllCommunityModule ]);

@Component({
  selector: 'app-status-roles-component',
  imports: [AgGridAngular, MatMiniFabButton, MatTooltip, MatIcon, MatTooltip, LoadingComponent],
  templateUrl: './status-roles-component.html',
  styleUrl: './status-roles-component.css'
})
export class StatusRolesComponent {

  uiFlags: any = {
    fetchingRows: false,
  };

  columnDefs: ColDef[] = [
    {field: 'caseRole.name', headerName: 'Case Role'},
    {field: 'name', headerName: 'Status Code'},
    {field: 'dateCreated', filter: false, floatingFilter: false}
  ]
  defaultColDef: ColDef = {
    flex: 1,
    minWidth: 100,
    resizable: true,
    sortable: true,
    filter: true,
    floatingFilter: true,
  };


  gridDataSource: IDatasource | undefined;
  rowModelType:  RowModelType = 'infinite';

  // helps display correct information about data loaded and if any other data is yet to be
  // loaded from server.
  gridStatsHelper: any = {
    ready: false,             // set to true when the first set of data results load into grid.
    isLastRowKnown: false,    // set to true if all pages of data are loaded.
    rowCount: 0               // total row count
  };

  constructor(public apiService: ApiService) {
  }

  ngOnInit(): void {
  }

  fetchApiDataAndInitGrid() {
    console.log('1');
    this.gridDataSource = {
      rowCount: undefined,
      getRows: (params: IGetRowsParams) => {
        console.log('2');
        this.fetchNextRowBlock(params);
      }
    }

  }

  fetchNextRowBlock(params: IGetRowsParams) {
    console.log('3');
    let queryParams: any = {
      closedCasesOnly: this.uiFlags.archives,
      startRow: params.startRow,
      endRow: params.endRow,
      sortModel: params.sortModel,
      filterModel: params.filterModel
    };

    this.uiFlags.fetchingRows = true;
    this.apiService.getStatusCodesPaged(queryParams)
      .pipe(
        finalize(() => {
          this.uiFlags.fetchingRows = false;
        })
      )
      .subscribe((caseRoles: CaseEntityStatusRoleDto[]) => {
          this.processReceivedData(caseRoles, params);
        },
        error => {
          console.log(error);
        })
  }

  private processReceivedData(statusRoles: CaseEntityStatusRoleDto[], params: IGetRowsParams) {
    this.gridStatsHelper.ready = true;

    const blockSize = params.endRow - params.startRow;
    let lastRow = -1;
    this.gridStatsHelper.isLastRowKnown = false;
    if (statusRoles.length < blockSize) {
      lastRow = params.startRow + statusRoles.length;
      this.gridStatsHelper.isLastRowKnown = true;
    }
    params.successCallback(statusRoles, lastRow);

  }


  gridRowDoubleClicked($event: RowDoubleClickedEvent<any>) {

  }

  gridPaginationChanged() {

  }

  gridFirstDataRendered() {

  }

  gridAuxClickEvent() {

  }

  gridFilterChanged($event: FilterChangedEvent<any>) {

  }

  CheckCanUseButtons(): boolean {
    return true;
  }

  clearFiltersButtonClick() {

  }

  downloadCSVButtonClick() {

  }

  onGridReady(params: GridReadyEvent<CaseEntityStatusRoleDto>) {
    this.apiService.getStatusCodesPaged()
      .subscribe((data) => {
        const dataSource: IDatasource = {
          rowCount: undefined,
          getRows: (params: IGetRowsParams) => {
            console.log(
              "asking for " + params.startRow + " to " + params.endRow,
            );
            this.apiService.getStatusCodesPaged(params)
              .subscribe((data) => {
                console.log(data[0].caseRole);
                // if on or after the last page, work out the last row.
                let lastRow = -1;
                if (data.length <= params.endRow) {
                  lastRow = data.length;
                }
                // call the success callback
                params.successCallback(data, lastRow);

              });
          },
        };
        console.log('datasource set');
        params.api!.setGridOption("datasource", dataSource);
      });
  }
}
