export class MilestoneValidator {
  milestoneNameLengthValidator(value: string): boolean {
    return value.length >= 3 && value.length < 100;
  }

  milestoneGoalPriceAmountValidator(value: number): boolean {
    return value > 0;
  }

  mileStoneDeadLineValidator(value: Date): boolean {
    let today = new Date();
    return value > today;
  }
}
