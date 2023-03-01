import FlatList from 'flatlist-react';

export default function OrgList() {

      renderPerson = (person, idx) => {
        return (
            <li key={idx}>
              <b>{person.firstName} {person.lastName}</b> (<span>{person.info.age}</span>)
            </li>
        );
      }



      return (
        <ul>
            <FlatList
              list={this.props.people}
              renderItem={this.renderPerson}
              renderWhenEmpty={() => <div>List is empty!</div>}
              sortBy={["firstName", {key: "lastName", descending: true}]}
              groupBy={person => person.info.age > 18 ? 'Over 18' : 'Under 18'}
            />
        </ul>
    )
}