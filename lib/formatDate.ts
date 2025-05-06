export function formatDate(dateString: string): string {
    const date = new Date(dateString);
  
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
  
    // const getOrdinalSuffix = (n: number) => {
    //     if (n >= 11 && n <= 13) return 'th';
    //     switch (n % 10) {
    //         case 1: return 'st';
    //         case 2: return 'nd';
    //         case 3: return 'rd';
    //         default: return 'th';
    //     }
    // };
  
    // const dayWithSuffix = `${day}${getOrdinalSuffix(day)}`;
    return `${month}. ${day}, ${year}`;
}

export function calcAge(birthdate: string): number {
    const today = new Date();
    const birthDate = new Date(birthdate);
  
    let age = today.getFullYear() - birthDate.getFullYear();
  
    // Check if the birthday hasn't happened yet this year
    const hasBirthdayPassed =
        today.getMonth() > birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());
  
    if (!hasBirthdayPassed) {
      age--;
    }
  
    return age;
  }