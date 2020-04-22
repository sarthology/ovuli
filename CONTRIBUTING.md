# Contributing

Hey all 👋 

Welcome to project ovuli. I will try to make this guide as simple as possible and will cover all aspect of this projects and way in which you guys can contribute. 

## How to work on an issue

1. Go in to the issues section and find the issue you are interested in.
2. Comment on the issue that you are interested.
3. The Mentor will assign you the issue.

👉 ***Make sure that you are assigned task before working on it.***

## How to submit work

### 1. You have to fork the repo

You can get your own fork/copy of [ovuli](https://github.com/sarthology/ovuli) by using the <kbd><b>Fork</b></kbd> button.

 [![Fork Button](https://help.github.com/assets/images/help/repository/fork_button.jpg)](https://github.com/sarthology/ovuli)
 
### 2. Then clone it locally

You need to clone (download) it to local machine using

```sh
$ git clone https://github.com/Your_Username/ovuli.git
```

> This makes a local copy of repository in your machine.

Once you have cloned the `ovuli` repository in Github, move to that folder first using change directory command on linux and Mac.

```sh
# This will change directory to a folder ovuli
$ cd ovuli
```

Move to this folder for all other commands.

To install dependencies

```sh
yarn install
```

to run locally  

```sh
expo start
```

### 3. Next create new branch in your repo

Whenever you are going to make contribution. Please create seperate branch using command and keep your `master` branch clean (i.e. synced with remote branch).

```sh
# It will create a new branch with name Branch_Name and will switch to that branch 
$ git checkout -b Branch_Name
```

### 4. Start working on the issue

To add the changes to the branch. Use

```sh
# To add all files to branch Branch_Name
$ git add .
```

To commit type in a message relevant for the code reveiwer using

```sh
# This message get associated with all files you have changed
$ git commit -m 'relevant message'
```

### 5. Send the pull request 

Now, Push your awesome work to your remote repository using

```sh
# To push your work to your remote repository
$ git push -u origin Branch_Name
```

Finally, go to your repository in browser and click on `compare and pull requests`.
Then add a title and description to your pull request that explains your precious effort.

👉 ***If you want to know the commands to do it see this: [Pull Request Gist](https://gist.github.com/Chaser324/ce0505fbed06b947d962)***

## Ways to contribute

I know not everyone has their grasp on React Native yet but there are multiple ways to contribute in this project.

1. **Design:** If you feel like that your *Design sense* is awesome. This section is for you, we are using figma to create deisgn. All the wireframes will be uploaded in `wireframes` folder. 
2. **Documentation / Wiki:** Documentation is very important aspect of any open source project and it is for this project as well. You might learn a lot while writing about it.
3. **Language Translation:** We are not using google translator to be precise. Also the language conversion will be only for UI elements. Feel free to add your own language. We will be storing this info in `translations` folder.
4. **Report Issues:** I consider this as one of the most important tasks. Follow the steps mention is upcomming section.
5. **Code:** Last but not least you can code the feature or fix a bug to make it flawless. There are two ways you can do that 
	-	**HTML & CSS:** We are using [Atomic Design System](https://bradfrost.com/blog/post/atomic-web-design/) so you can even just design and button by changing it's color and still have a big impact of the over all platform.
	- **React Native:** You can go into the screens and start writing react code to complete feature or fix the bug.

👉 ***Whatever you choose first contact me @sarthology.***

| Type        | Points          
| ----------- |:------:
|  Design     | 4 
|  Documentation / Wiki | 2      
|  Language Translation | 2
| Report Issues| 2-4
| Code | 4-10


## How to report an issue 
We will be using Github issues, 
**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
- What you expected would happen
- What actually happens
- Screenshots / Gifs / Videos
- Notes 

People *love* thorough bug reports. I'm not even kidding.

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

## License
By contributing, you agree that your contributions will be licensed under its MIT License.

<p align="center">
	<h4 align="center"> In the end, most important of all </h4>
	<h4 align="center"> Be Nice to everyone </h4>
	<h4 align="center"> Now Let's kill it</h4>
</p>

<p align="center">
	<img  src="https://media.giphy.com/media/j2pWZpr5RlpCodOB0d/giphy.gif">
</p>


