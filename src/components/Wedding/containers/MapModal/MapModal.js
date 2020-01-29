import React, { PureComponent } from 'react';

export class MapModal extends PureComponent {
    render() {
        const { event, handleModalClose } = this.props;
        return (
            <div id="direction-modal" className="direction-modal modal show" tabindex="-1" role="dialog" aria-labelledby="directionModalLabel" style={{ display: 'block', background: '#212529c9' }} aria-modal="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleModalClose}><span aria-hidden="true">×</span></button>
                                <h4 className="modal-title text-center" id="directionModalLabel">How to get to the {event} venue</h4>
                        </div>
                        <div className="modal-body">
                            <iframe 
                                title="venue-map"
                                src={event === 'ceremony' ? 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13980.674149801313!2d78.2552235!3d28.833841899999996!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb53ce9c1544072de!2sHighway%20Resort!5e0!3m2!1sen!2sin!4v1580195490812!5m2!1sen!2sin' : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1798.7505886792342!2d85.15251470789791!3d25.62148679838292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed599abd9a99cf%3A0x6b2f54388ce9fdb6!2sMarriage%20Hall!5e0!3m2!1sen!2sin!4v1580195754689!5m2!1sen!2sin'} 
                                width="100%" 
                                height="500" 
                                frameborder="0" 
                                style={{ border: '0' }} 
                                allowfullscreen="" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

