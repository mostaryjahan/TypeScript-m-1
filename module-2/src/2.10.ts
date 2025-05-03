{
    //Mapped types

    type AreaString = {
        height : string;
        width: string
    }

        // type Height = AreaString["height"]


        //map with generic
    type AreaNumber<T> = {
        [num in keyof T ] : T[num]
    }

    const area1 : AreaNumber<{height: string; width: number}> = {
        height: "100",
        width : 50
    }

    









    //
}