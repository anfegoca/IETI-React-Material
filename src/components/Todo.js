import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export class Todo extends React.Component {

   

    render() {
        return (
            <Card >
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        TODO
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        {this.props.text}
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                        priority {this.props.priority}
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                        Date {this.props.dueDate.format('DD-MM-YYYY')}
                    </Typography>

                </CardContent>

            </Card>
        );
    }

}