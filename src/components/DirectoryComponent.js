import React, { Component } from 'react';
import { Button, Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSite: null
        };
    }

    onSiteSelect(site) {
        this.setState({ selectedSite: site });
    }

    renderSelectedSite(site) {
        if (site) {
            return (
                <Card>
                    <CardImg top src={site.image} alt={site.name} />
                    <CardBody>
                        <CardTitle>{site.name}</CardTitle>
                        <CardText>{site.description}</CardText>
                        <Button className="btn-lg btn-block">Learn More</Button>
                    </CardBody>
                </Card >
            );
        }
        return <div />;
    }

    render() {
        const directory = this.props.sites.map(site => {
            return (
                <div key={site.id} className="col-md-4 mt-5 mx-auto" offset="md-1">
                    <Card onClick={() => this.onSiteSelect(site)}>
                        <CardImg width="100%" src={site.image} alt={site.name} />
                        <CardImgOverlay>
                            <CardTitle>{site.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-5 m-1">
                        {this.renderSelectedSite(this.state.selectedSite)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Directory;