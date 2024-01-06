Objective - create a react app that fetch data from API and stores the data in the redux table and then display it in a table.
Libraray Used -
1. React
2. Material-Ui
3. redux

components -
1.DataTable
2.redux
3.Header
4.Footer

steps -
1. create a react app using npx create-react-app.
2. create a component folder called redux.
3. create a react file called store to create the redux store using configure store.
4. after configure the store, created a folder 'reducer' inside 'redux' folder which contain a react file called 'dataSlice.jsx' that used 'creatSlice' function to define individual slices. Each slices contains an initial state, a reducer and action creater.
5. now created a folder called components. under components folder we have subfolders-
   a. DataTable- This folder contain two files first is 'DataTable.jsx' and second one is 'dataTable.css'.
      a.1 dataTable.jsx-
         a.1.1 imported necessary componets from material -ui and react.
         a.1.2 created a function called 'DataTable' which have variuos functionalities -
            a.1.2.1 fetch data from Api.
            a.1.2.2 manages state using redux to store the data and retrive data.
            a.1.2.3 have used material-ui library to create a table to show data on user interface when the application loaded which also included pagination.
      a.2 datatable.css-
         a.2.1 included css to style Datatable.
   b. Header - This folder contain two files-
      b.1 Header.jsx - To create a header for the ui.
      b.2 Header.css - for header styling.

   c. Footer - This folder contain two files-
   c.1 footer.jsx - To create a footer.
   c.2 footer.css - for footer styling

6. main component that is 'App' have contained differet child components - 1. DataTable from DataTable folder. 2. Header from Header folder 3. Footer from Footer folder.

   


   
