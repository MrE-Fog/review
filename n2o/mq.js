var match, pl = /\+/g, search = /([^&=]+)=?([^&]*)/g,
    decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
    query = window.location.search.substring(1),
    nodes = 4,
    params = {}; while (match = search.exec(query)) params[decode(match[1])] = decode(match[2]);
var l = location.pathname,
    x = l.substring(l.lastIndexOf("/") + 1),
    ll = x.lastIndexOf("."),
    module = x == "" ? "index" : (ll > 0 ? x.substring(0, ll) : x);
var clientId = undefined;
var ws = { send: function (payload, qos) {
        var message = new Paho.MQTT.Message(payload);
        message.destinationName = topic("events");
        message.qos = qos || 2;
        mqtt.send(message); } };

var subscribeOptions = {
    qos: 2,  // QoS
    invocationContext: { foo: true },  // Passed to success / failure callback
    onSuccess: function (x) { console.log("N2O Subscribed"); },
    onFailure: function (m) { console.log("N2O Subscription failed: " + m.errorMessage); },
    timeout: 2 };

var options = {
    timeout: 2,
    userName: module,
    password: "password",
    onFailure: function (m) { console.log("N2O Connection failed: " + m.errorMessage); },
    onSuccess: function ()  { console.log("N2O Connected");
                            } };
function token() { return localStorage.getItem("token")||'krocks'; };
function topic(prefix) { return prefix + "/1/" + rnd() + "/" + module + "/anon/" + clientId + "/" + token(); }
function rnd() { return Math.floor((Math.random() * nodes)+1); }

  mqtt = new Paho.MQTT.Client(host, 8083, '');
  mqtt.onConnectionLost = function (o) { console.log("connection lost: " + o.errorMessage); };
  mqtt.onMessageArrived = function (m) {

  if (undefined == clientId)
        {
            words = m.destinationName.split("/");
            clientId = words[3];
            console.log(clientId);
            ws.send(enc(tuple(atom('init'),bin(token()))));
        } else {
        var BERT = m.payloadBytes.buffer.slice(m.payloadBytes.byteOffset,
            m.payloadBytes.byteOffset + m.payloadBytes.length);
        try {
            erlang = dec(BERT);
            for (var i = 0; i < $bert.protos.length; i++) {
                p = $bert.protos[i]; if (p.on(erlang, p.do).status == "ok") return;
            }
        } catch (e) { console.log(e); }
        }
    };

console.log(module);
mqtt.connect(options);

