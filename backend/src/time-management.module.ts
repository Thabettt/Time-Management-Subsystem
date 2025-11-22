import { Module } from '@nestjs/common';
import { TimeManagementController } from './time_management_controller';
import { TimeManagementService } from './time_management_service';
import { MongooseModule } from '@nestjs/mongoose';
import { NotificationLogSchema, NotificationLog } from './models/notification_log';
import { AttendanceCorrectionRequestSchema, AttendanceCorrectionRequest } from './models/attendance_correction_request';
import { ShiftTypeSchema, ShiftType } from './models/shift_schema';
import { ScheduleRuleSchema, ScheduleRule } from './models/schedule_rule';
import { AttendanceRecordSchema, AttendanceRecord } from './models/attendance_record';
import { TimeExceptionSchema, TimeException } from './models/time_exception';
import { OvertimeRuleSchema, OvertimeRule } from './models/overtime_rule';
import { ShiftSchema, Shift } from './models/shift_type';
import { ShiftAssignmentSchema, ShiftAssignment } from './models/shift_assignment';
import { LatenessRule, latenessRuleSchema } from './models/lateness_rule';
import { HolidaySchema, Holiday } from './models/holiday';


@Module({
  imports: [MongooseModule.forFeature([
    { name: NotificationLog.name, schema: NotificationLogSchema },
    { name: AttendanceCorrectionRequest.name, schema: AttendanceCorrectionRequestSchema },
    { name: ShiftType.name, schema: ShiftTypeSchema },
    { name: ScheduleRule.name, schema: ScheduleRuleSchema },
    { name: AttendanceRecord.name, schema: AttendanceRecordSchema },
    { name: TimeException.name, schema: TimeExceptionSchema },
    { name: OvertimeRule.name, schema: OvertimeRuleSchema },
    { name: Shift.name, schema: ShiftSchema },
    { name: ShiftAssignment.name, schema: ShiftAssignmentSchema },
    { name: LatenessRule.name, schema: latenessRuleSchema },
    { name: Holiday.name, schema: HolidaySchema },
  ])],
  controllers: [TimeManagementController],
  providers: [TimeManagementService]
})
export class TimeManagementModule {}