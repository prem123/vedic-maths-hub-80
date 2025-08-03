import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MapPin, ExternalLink } from "lucide-react";

const MapSection = () => {
  const [showIframe, setShowIframe] = useState(false);

  const handleOpenMaps = () => {
    window.open("https://maps.app.goo.gl/Q2KW2KdhcX2F4HPP8", "_blank");
  };

  const toggleMap = () => {
    setShowIframe(!showIframe);
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-primary" />
            <span>Our Location</span>
          </div>
          <Button variant="outline" size="sm" onClick={handleOpenMaps}>
            <ExternalLink className="h-4 w-4 mr-2" />
            Open in Maps
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="space-y-4 p-6">
          <div>
            <h4 className="font-semibold mb-2">Abacus and Vedic Maths Coaching Centre</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              House no: 2-1-7/2/10, Flat no. 101,<br/>
              Alli Pentaiah Mallama Residency,<br/>
              Venkateshwara Colony, Upperpally,<br/>
              Janapriya Utopia Road,<br/>
              Near Chaitanya Villas Colony Park,<br/>
              Rajendra Nagar, Hyderabad,<br/>
              Telangana 500048, India
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <Badge variant="secondary" className="text-xs">
              5.0 ⭐ (51 reviews)
            </Badge>
            <Badge variant="outline" className="text-xs">
              Women-owned
            </Badge>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-medium text-green-600 mb-1">Open Today</p>
              <p className="text-muted-foreground">10:30 AM - 7:00 PM</p>
            </div>
            <div>
              <p className="font-medium mb-1">Sunday Hours</p>
              <p className="text-muted-foreground">11:00 AM - 1:00 PM</p>
            </div>
          </div>

          <Button 
            onClick={toggleMap} 
            variant="outline" 
            className="w-full"
          >
            {showIframe ? "Hide Map" : "Show Interactive Map"}
          </Button>
        </div>

        {showIframe && (
          <div className="border-t">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.6477684937394!2d78.38545931538236!3d17.383095088074396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8c9d8b85%3A0x5b9b9b9b9b9b9b9b!2sAbacus%20and%20Vedic%20Maths%20Coaching%20Centre!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ace Arithmetic Academy Location"
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MapSection;