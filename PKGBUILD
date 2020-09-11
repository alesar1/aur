# Maintainer: Daniel Bermond <dbermond@archlinux.org>

pkgname=muwire-git
pkgver=0.7.2.r0.gbfa88b0b
pkgrel=1
pkgdesc='An I2P file sharing program (git version)'
arch=('any')
url='https://muwire.com/'
license=('GPL3')
depends=('sh' 'java-runtime>=9' 'hicolor-icon-theme')
makedepends=('git' 'gradle')
provides=('muwire')
conflicts=('muwire')
source=('git+https://github.com/zlatinb/muwire.git'
        'muwire.desktop'
        'muwire.sh')
sha256sums=('SKIP'
            '7d61c69613029bd2b2e82f227a230104b880635fd8d44a649b2192b03c3cc509'
            'e47811d85a211d0c2272fbcd7bbbb03a49d3176a1aab81e95580d377e825aa2d')

pkgver() {
    git -C muwire describe --long --tags | sed 's/^muwire-//;s/\([^-]*-g\)/r\1/;s/-/./g;s/^v//'
}

build() {
    gradle -p muwire clean assemble
}

package() {
    bsdtar -xf "muwire/gui/build/distributions/gui-shadow-${pkgver%%.r*}.tar" \
        -C muwire --strip-components='2' "*/lib/gui-${pkgver%%.r*}-all.jar"
    
    install -D -m755 muwire.sh "${pkgdir}/usr/bin/muwire"
    install -D -m644 muwire.desktop -t "${pkgdir}/usr/share/applications"
    install -D -m644 "muwire/gui-${pkgver%%.r*}-all.jar" "${pkgdir}/usr/share/java/muwire.jar"
    
    local _file
    local _res
    while read -r -d '' _file
    do
        _res="$(sed 's/\.png$//;s/^.*x//' <<< "$_file")"
        install -D -m644 "$_file" "${pkgdir}/usr/share/icons/hicolor/${_res}x${_res}/apps/${pkgname}.png"
    done < <(find muwire/gui/griffon-app/resources -maxdepth 1 -type f -name 'MuWire-*x*.png' -print0)
}
