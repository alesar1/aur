# Maintainer : Daniel Bermond < yahoo-com: danielbermond >
# Contributor: Yen Chi Hsuan <yan12125@gmail.com>
# Contributor: Michał Górny <zrchos+arch@gmail.com>
# Contributor: Ryan Lee <ryan@swyro.com>

_player_ver=30.0

pkgname=apache-flex-sdk
pkgver=4.16.1
pkgrel=4
pkgdesc='The open-source framework for building expressive web and mobile applications'
arch=('any')
url='https://flex.apache.org/'
license=('APACHE')
depends=('bash' 'java-environment')
optdepends=('adobe-air-sdk: for compiling flex projects into AIR apps')
options=('!strip' '!emptydirs')
install="${pkgname}.install"
source=("https://www.apache.org/dist/flex/${pkgver}/binaries/apache-flex-sdk-${pkgver}-bin.tar.gz"
        "https://fpdownload.macromedia.com/get/flashplayer/installers/archive/playerglobal/playerglobal${_player_ver/./_}.swc"
        'apache-flex-sdk.sh')
noextract=("playerglobal${_player_ver/./_}.swc")
sha256sums=('17fda7ac8d3e476cad3127f345455ef316acfb87c6f4322e5897bd8d9b09388e'
            'f906e5c9cbb958ec3da5c7eff054627b20eff4ac28a09bee48f6a02618fa3aad'
            '950fcb6fbdb1349018fd47277eaaacf0821ee44951e8b64cd1676839f0d39814')

prepare() {
    cd "${pkgname}-${pkgver}-bin"
    
    mkdir -p "player/${_player_ver}"
    
    cp -f "${srcdir}/playerglobal${_player_ver/./_}.swc" "player/${_player_ver}/playerglobal.swc"
}

package() {
    install -d "${pkgdir}/opt"
    
    # install sdk files
    cp -dr --no-preserve='ownership' "${pkgname}-${pkgver}-bin" "${pkgdir}/opt/${pkgname}"
    
    # set PATH
    install -D -m755 apache-flex-sdk.sh -t "${pkgdir}/etc/profile.d"
    
    # remove windows files
    rm -f "${pkgdir}/opt/${pkgname}/bin/"*.bat
}
