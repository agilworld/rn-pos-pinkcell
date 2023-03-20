import { NavigationContainerRef, ParamListBase } from "@react-navigation/native"

let _navigator:NavigationContainerRef<ParamListBase>

function initial(navigatorRef:NavigationContainerRef<ParamListBase>) {
    _navigator = navigatorRef;
}

function navigate(routeName:string, params:Partial<ParamListBase>) {
    _navigator.navigate(routeName, {
        params
    });
}

function resetRoot(routeName:string, params?:Partial<ParamListBase>) {
    console.log("navigator", _navigator)
    _navigator.resetRoot(
        {
            index: 0,
            routes: [
                { name: routeName, params:params  },
            ],
        }
    );
}

export default {
    initial,
    navigate,
    resetRoot,
};
