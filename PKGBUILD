# Maintainer: Daniel Bermond <dbermond@archlinux.org>

pkgname=muwire
pkgver=0.7.6
pkgrel=1
pkgdesc='An I2P file sharing program'
arch=('any')
url='https://muwire.com/'
license=('GPL3')
depends=('sh' 'java-runtime>=9' 'hicolor-icon-theme')
makedepends=('gradle')
source=("https://github.com/zlatinb/muwire/archive/muwire-${pkgver}.tar.gz"
        'muwire.desktop'
        'muwire.sh')
sha256sums=('0e0bb026101668d6389479351471ad87ab4424f63cc812c331ddf76da52ee7f3'
            '7d61c69613029bd2b2e82f227a230104b880635fd8d44a649b2192b03c3cc509'
            '05df19c773e30627da851e1885f01896d2eab35696a56878c06a9a7ebd945a43')

build() {
    gradle -p "muwire-muwire-${pkgver}" clean assemble
}

package() {
    bsdtar -xf "muwire-muwire-${pkgver}/gui/build/distributions/gui-shadow-${pkgver}.tar" \
        -C "muwire-muwire-${pkgver}" --strip-components='2' "*/lib/gui-${pkgver}-all.jar"
    
    install -D -m755 muwire.sh "${pkgdir}/usr/bin/muwire"
    install -D -m644 muwire.desktop -t "${pkgdir}/usr/share/applications"
    install -D -m644 "muwire-muwire-${pkgver}/gui-${pkgver}-all.jar" "${pkgdir}/usr/share/java/muwire.jar"
    
    local _file
    local _res
    while read -r -d '' _file
    do
        _res="$(sed 's/\.png$//;s/^.*x//' <<< "$_file")"
        install -D -m644 "$_file" "${pkgdir}/usr/share/icons/hicolor/${_res}x${_res}/apps/${pkgname}.png"
    done < <(find "muwire-muwire-${pkgver}/gui/griffon-app/resources" -maxdepth 1 -type f -name 'MuWire-*x*.png' -print0)
}
