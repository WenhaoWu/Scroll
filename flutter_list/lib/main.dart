import 'package:flutter/material.dart';

void main() => runApp(new MyApp());

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
      home: new MyHomePage(),
    );
  }
}

class MyHomePage extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      body: new ListView.builder(
        scrollDirection: Axis.vertical,
        itemCount: 1000,
        padding: const EdgeInsets.all(15.0),
        itemBuilder: (BuildContext context, int index)=> new Item()
      ),
    );
  }
}

class Item extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new Row(
      children: <Widget>[
        new Image(
          image: new NetworkImage("https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"),
          width: 150.0,
          height: 110.0,
        ),
        new Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            new Text("Banana"),
            new Text("Banana is better than apple!")
          ],
        )
      ],
    );
  }
}