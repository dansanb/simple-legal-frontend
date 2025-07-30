import {CaseEntityRoleDto} from './caseEntityRoleDto';

export class CaseEntityStatusRoleDto {
  id: string = '';
  name: string = '';
  caseRole: CaseEntityRoleDto = new CaseEntityRoleDto();
  dateCreated: Date = new Date();
  dateUpdated: Date = new Date();
}
