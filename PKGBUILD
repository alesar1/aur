# Maintainer: Trygve Aaberge <trygveaa+aur at gmail dot com>
# Contributor: Pawel Mosakowski <pawel at mosakowski dot net>
pkgname=appgate-sdp-5.0
conflicts=('appgate-sdp-headless' 'appgate-sdp' 'appgate-sdp-5')
pkgver=5.0.3
_download_pkgver=$(expr match "$pkgver" '\([[:digit:]]\+\.[[:digit:]]\+\)')
_download_pkgname='appgate-sdp'
pkgrel=1
epoch=
pkgdesc="Software Defined Perimeter v5.0 - GUI client"
arch=('x86_64')
url="https://www.cyxtera.com/essential-defense/appgate-sdp/support"
license=('custom')

# dependecies calculated by namcap
depends=('gconf' 'libsecret' 'gtk3' 'python' 'nss' 'libxss' 'nodejs' 'dnsmasq' 'python-dbus')
optdepends=('gnome-keyring: saves the endpoint certificate between sessions')
source=("https://bin.appgate-sdp.com/${_download_pkgver}/client/${_download_pkgname}_${pkgver}_amd64.deb"
        "appgatedriver.service.patch"
        "nm.py.patch"
        "set_dns.patch")

options=(staticlibs)

prepare() {
    tar -xf data.tar.xz
}

package() {
    cp -dpr "${srcdir}"/{etc,lib,opt,usr} "${pkgdir}"
    mv -v "$pkgdir/lib/systemd/system" "$pkgdir/usr/lib/systemd/"
    rm -vrf "$pkgdir/lib"

    patch "$pkgdir/usr/lib/systemd/system/appgatedriver.service" "$srcdir/appgatedriver.service.patch"
    patch "$pkgdir/opt/appgate/linux/nm.py" "$srcdir/nm.py.patch"
    patch "$pkgdir/opt/appgate/linux/set_dns" "$srcdir/set_dns.patch"

    mkdir -vp "$pkgdir/usr/share/licenses/appgate-sdp"
    cp -v "$pkgdir/usr/share/doc/appgate/copyright" "$pkgdir/usr/share/licenses/appgate-sdp"
    cp -v "$pkgdir/usr/share/doc/appgate/LICENSE.github" "$pkgdir/usr/share/licenses/appgate-sdp"
    cp -v "$pkgdir/usr/share/doc/appgate/LICENSES.chromium.html.bz2" "$pkgdir/usr/share/licenses/appgate-sdp"
}

md5sums=('1ffc310a4aea80fb8574f7d3eaa611ec'
         '52c30e4c8d5e6131aa48c9a1919aafd2'
         'ea96f36053ec1e500926bed501a15d46'
         'aa95ad0ba9304cf72ee43779cd28d9a5')
