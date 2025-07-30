import {Component, inject} from '@angular/core';
import {AgGridAngular} from 'ag-grid-angular';
import type {
  GridApi,
  ColDef,
  RowDoubleClickedEvent,
  IDatasource,
  IGetRowsParams,
  GridReadyEvent,
  RowModelType,
} from 'ag-grid-community';
import {ApiService} from '../../services/api/apiService';
import {CaseEntityStatusRoleDto} from '../../services/api/models/caseEntityStatusRoleDto';
import {ModuleRegistry, AllCommunityModule} from 'ag-grid-community';
import {
  ActionButtonComponent
} from '../../_common/action-button-component/action-button-component';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmDialogComponent} from '../../_common/confirm-dialog-component/confirm-dialog-component';

ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-status-roles-component',
  imports: [AgGridAngular, ActionButtonComponent],
  templateUrl: './status-roles-component.html',
  styleUrl: './status-roles-component.css'
})
export class StatusRolesComponent {
  private gridApi!: GridApi<CaseEntityStatusRoleDto>;
  readonly dialog = inject(MatDialog);

  clearFilters() {
    this.gridApi.setFilterModel(null);
  }

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
  rowModelType: RowModelType = 'infinite';

  constructor(public apiService: ApiService) {
  }

  onGridReady(params: GridReadyEvent<CaseEntityStatusRoleDto>) {
    this.gridApi = params.api;

    this.apiService.getStatusCodesPaged()
      .subscribe(() => {
        const dataSource: IDatasource = {
          rowCount: undefined,
          getRows: (params: IGetRowsParams) => {
            this.apiService.getStatusCodesPaged(params)
              .subscribe((data) => {
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
        params.api!.setGridOption("datasource", dataSource);
      });
  }

  gridRowDoubleClicked($event: RowDoubleClickedEvent<any>) {

  }

  downloadCSV() {
    this.gridApi.exportDataAsCsv({fileName: 'status-roles-data.csv'})
  }
  handleDelete() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {message: 'Delete r u sure lulz'}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        console.log('DO IT...');
      }
    });
  }

  onEditClick() {

  }
}
