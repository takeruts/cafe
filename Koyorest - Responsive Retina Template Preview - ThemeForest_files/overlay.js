google.maps.__gjsload__('overlay', '\'use strict\';function BA(a){this.j=a}x(BA,K);BA.prototype.changed=function(a){"outProjection"!=a&&(a=!!(this.get("offset")&&this.get("projectionTopLeft")&&this.get("projection")&&D(this.get("zoom"))),a==!this.get("outProjection")&&this.set("outProjection",a?this.j:null))};function CA(){}function DA(){var a=this.sh;if(this.getPanes()){if(this.getProjection()){if(!a.j&&this.onAdd)this.onAdd();a.j=!0;this.draw()}}else{if(a.j)if(this.onRemove)this.onRemove();else this.remove();a.j=!1}}function EA(a){a.sh=a.sh||new CA;return a.sh}function FA(a){V.call(this);this.Ia=t(DA,a)}x(FA,V);function GA(){}\nGA.prototype.qn=function(a){var b=a.getMap(),c=EA(a),d=c.Ip;c.Ip=b;d&&(c=EA(a),(d=c.Ua)&&d.unbindAll(),(d=c.lk)&&d.unbindAll(),a.unbindAll(),a.set("panes",null),a.set("projection",null),G(c.Ba,I.removeListener),c.Ba=null,c.Lb&&(c.Lb.Ia(),c.Lb=null),Yl("Ox","-p",a));if(b){c=EA(a);d=c.Lb;d||(d=c.Lb=new FA(a));G(c.Ba,I.removeListener);var e=c.Ua=c.Ua||new Yk,f=b.__gm;e.bindTo("zoom",f);e.bindTo("offset",f);e.bindTo("center",f,"projectionCenterQ");e.bindTo("projection",b);e.bindTo("projectionTopLeft",f);\ne=c.lk=c.lk||new BA(e);e.bindTo("zoom",f);e.bindTo("offset",f);e.bindTo("projection",b);e.bindTo("projectionTopLeft",f);a.bindTo("projection",e,"outProjection");a.bindTo("panes",f);e=t(d.Ca,d);c.Ba=[I.addListener(a,"panes_changed",e),I.addListener(f,"zoom_changed",e),I.addListener(f,"offset_changed",e),I.addListener(b,"projection_changed",e),I.addListener(f,"projectioncenterq_changed",e),I.forward(b,"forceredraw",d)];d.Ca();b instanceof Vd&&(Z(b,"Ox"),Xl("Ox","-p",a,!!b.Fa))}};var HA=new GA;me.overlay=function(a){eval(a)};Ec("overlay",HA);\n')