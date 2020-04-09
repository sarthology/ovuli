<p align="center">
 <img src="https://user-images.githubusercontent.com/3650216/75360727-3dbbf900-58dc-11ea-9a59-d881bbf0c61a.png"/>
</p>

> ***Note:*** *If you are looking for the Ovuli-cli app then go [here](https://github.com/teamxenox/ovuli-cli)*

Welcome stars of ***GSSoC***, over the course of few months we will be creating magic here from our hard work. 

We are creating an Ovulation Calculator and Calendar mobile app. This app is going to support ***20+ official Indian Languages***.

If you are as excited as I am, Open up your terminals 👩🏻‍💻💪🏽

## Prerequisites

Before running this locally you must have these installed

- [Node](https://nodejs.org/)
- [yarn](https://yarnpkg.com)
- [Expo](https://reactnative.dev/docs/getting-started)

## Installation
To run locally

```sh
yarn install
```
then 

```sh
expo start
```

**Note:** *Don't use npm*

## Contribution Conventions

1. Start using functional components.

2. Start using module resolver.

    eg.
    ### bad practice
    ```
    import LanguageScreen from '../../languageScreen';
    ```
    ### good practice
    ```
    import LanguageScreen from '@/screens/profileScreen/LanguageScreen'
    ```
    ### Reason
    * Easy to debug the file.
    * Increase readability.

3. Don't use Inline styles.
4. Please take create of the variable names. A variable name should define the function work.
5. If you are using colors. Then please create a color object for your component.
* Please add the outside the component scope like styles object. Define this after the Imports.

e.g.
```
const colors = {
   colorName: 'colorCode'
}
```
### Reason
In the future, if we have to change the color so we don't need to find them. This makes easy to find and updates.



## Contributing

Please read [CONTRIBUTING.md](https://github.com/sarthology/ovuli/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## License

MIT License
