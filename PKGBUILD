# Maintainer: Nicolas Stinus <nicolas.stinus@gmail.com>

pkgname=openvpn-nordvpn
pkgver=17.3.14
pkgrel=6
pkgdesc="OpenVPN configuration files and helper for nordvpn.com"
arch=(any)
url="http://www.nordvpn.com"
license=('MIT')
depends=('openvpn' 'systemd' 'openvpn-update-resolv-conf-git')
optdepends=('iputils: run ping and rank functions')
makedepends=('unzip' 'coreutils')
provides=('nordvpn')
source=('https://nordvpn.com/api/files/zip')
noextract=(zip)
sha256sums=('f23208d003bff7e5506a223f8b0bf93cf35155451ec590bb453797cde0dd960d')
install=${pkgname}.install

prepare() {
    test -d conf && rm -rf conf
    mkdir conf
    unzip -q zip -d conf
}

build() {
    for f in $(find conf -name '*udp1194.ovpn'); do
        sed 's/^auth-user-pass.*$/auth-user-pass \/etc\/openvpn\/client\/nordvpn\/credentials.conf/g' -i $f
        echo "" >> $f
        echo "# This updates the resolvconf with dns settings" >> $f
        echo "script-security 2" >> $f
        echo "up /etc/openvpn/update-resolv-conf" >> $f
        echo "down /etc/openvpn/update-resolv-conf" >> $f
    done
}

package() {
    for f in $(find conf -type f -name '*udp1194.ovpn'); do
        install -D -m 444 $f $pkgdir/etc/openvpn/client/nordvpn/$(basename $f)
        ln -s /etc/openvpn/client/nordvpn/$(basename $f) $pkgdir/etc/openvpn/client/nordvpn_$(echo $(basename $f) | cut -d '.' -f 1).conf
    done
    chmod 750 $pkgdir/etc/openvpn/client
    install -D -m 755 ../nordvpn $pkgdir/usr/bin/nordvpn
}
