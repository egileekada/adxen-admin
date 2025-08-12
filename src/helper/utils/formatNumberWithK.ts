import formatter from "format-number"


export const formatCurrency = (number: any, prefix = "NGN") => {
  if(number === "***") {
    return prefix+" ****"
  } else {
    return(
      formatter()(number % 1 !== 0 ? Number(number)?.toFixed(2) : number)+" "+prefix
    )
  }
}

export const formatNumberWithK = (num: any, sign?: boolean) => {
    // if(number === 0 || !number) {
    //     return "0"
    // } else {
    //     return number > 999 ? `${Math.trunc(number / 1000)}k` : number
    // }
    if (num >= 1_000_000) {
        return (sign ?  "₦" : "") +""+(num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (num >= 1_000) {
        return (sign ?  "₦" : "") +""+(num / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
    }
    return num?.toString(); 
}

export const numberFormatNaire = (x: any) => {
    return "₦" + Number(x).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const numberFormatDollar = (x: any) => { 
    return "$" + Number(x).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const numberFormat = (x: any) => {
    return Number(x).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}; 