import {Component} from '@angular/core';
import {AgGridAngular} from 'ag-grid-angular';
import type {
  RowDoubleClickedEvent,
  FilterChangedEvent,
  GridOptions,
  GridApi,
  IDatasource,
  IGetRowsParams
} from 'ag-grid-community';
import {MatMiniFabButton} from '@angular/material/button';
import {MatTooltip} from '@angular/material/tooltip';
import {MatIcon} from '@angular/material/icon';
import {LoadingComponent} from '../../_common/loading-component/loading-component';
import {finalize} from 'rxjs';
import {ApiService} from '../../services/api/apiService';
import {CaseEntityStatusRoleDto} from '../../services/api/models/caseEntityStatusRoleDto';

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

  colDefs = [
    {field: 'id'},
    {field: 'name'},
    {field: 'dateCreated'},
    {field: 'dateUpdated'}
  ]

  gridDataSource: IDatasource | undefined;
  gridApi: GridApi | undefined;
  caseSearchGridOptions: GridOptions = {
    columnDefs: this.colDefs,
  };

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
    this.fetchApiDataAndInitGrid();
  }

  fetchApiDataAndInitGrid() {
    this.gridDataSource = {
      rowCount: undefined,
      getRows: (params: IGetRowsParams) => {
        this.fetchNextRowBlock(params);
      }
    }
  }

  fetchNextRowBlock(params: IGetRowsParams) {
    let queryParams: any = {
      closedCasesOnly: this.uiFlags.archives,
      startRow: params.startRow,
      endRow: params.endRow,
      sortModel: params.sortModel,
      filterModel: params.filterModel
    };

    this.uiFlags.fetchingRows = true;
    this.apiService.getCaseEntityStatusRolesPages(queryParams)
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
}
