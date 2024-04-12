import * as Stitches from '@secrecy/stitches-react';
export declare const config: {
    prefix: "";
    media: {};
    theme: {
        colors: {
            primary: string;
        };
    };
    themeMap: import("@secrecy/stitches-react/types/config").DefaultThemeMap;
    utils: {
        bg: (value: Stitches.PropertyValue<'backgroundColor'>) => {
            color: import("@secrecy/stitches-react/types/css-util").WithPropertyValue<"backgroundColor">;
        };
        c: (value: Stitches.ScaleValue<'colors'>) => {
            color: import("@secrecy/stitches-react/types/css-util").WithScaleValue<"colors">;
        };
    };
}, styled: {
    withConfig: (config: {
        componentId?: string | undefined;
        displayName?: string | undefined;
        shouldForwardStitchesProp?: ((prop: "css" | (string & {})) => boolean | void) | undefined;
    }) => import("@secrecy/stitches-react/types/stitches").StyledFunctionType<{}, {
        colors: {
            primary: string;
        };
    }, import("@secrecy/stitches-react/types/config").DefaultThemeMap, {
        bg: (value: Stitches.PropertyValue<'backgroundColor'>) => {
            color: import("@secrecy/stitches-react/types/css-util").WithPropertyValue<"backgroundColor">;
        };
        c: (value: Stitches.ScaleValue<'colors'>) => {
            color: import("@secrecy/stitches-react/types/css-util").WithScaleValue<"colors">;
        };
    }>;
} & import("@secrecy/stitches-react/types/stitches").StyledFunctionType<{}, {
    colors: {
        primary: string;
    };
}, import("@secrecy/stitches-react/types/config").DefaultThemeMap, {
    bg: (value: Stitches.PropertyValue<'backgroundColor'>) => {
        color: import("@secrecy/stitches-react/types/css-util").WithPropertyValue<"backgroundColor">;
    };
    c: (value: Stitches.ScaleValue<'colors'>) => {
        color: import("@secrecy/stitches-react/types/css-util").WithScaleValue<"colors">;
    };
}>;
export declare const colorValue1: Stitches.PropertyValue<'backgroundColor', typeof config>;
export declare const colorValue2: Stitches.PropertyValue<'backgroundColor', typeof config>;
export declare const colorToken: Stitches.ScaleValue<'colors', typeof config>;
export declare const Box: import("@secrecy/stitches-react/types/styled-component").StyledComponent<"div", {}, {}, import("@secrecy/stitches-react/types/css-util").CSS<{}, {
    colors: {
        primary: string;
    };
}, import("@secrecy/stitches-react/types/config").DefaultThemeMap, {
    bg: (value: Stitches.PropertyValue<'backgroundColor'>) => {
        color: import("@secrecy/stitches-react/types/css-util").WithPropertyValue<"backgroundColor">;
    };
    c: (value: Stitches.ScaleValue<'colors'>) => {
        color: import("@secrecy/stitches-react/types/css-util").WithScaleValue<"colors">;
    };
}>>;
