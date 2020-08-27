import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card >
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {this.props.text}
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                        {this.props.priority}
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                        {this.props.dueDate.format('DD-MM-YYYY')}
                    </Typography>

                </CardContent>

            </Card>
        );
    }

}