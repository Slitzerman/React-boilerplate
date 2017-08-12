var React = require('react');

var Main = props => {
  return (
    <div>
      <div>
        <div>
          <p>Main.jsx rendered and styled</p>
          {props.children}
        </div>
      </div>
    </div>
  );
};

module.exports = Main;
