# Maintainer: Jacqueline Fisher <jcfisher@reality-overwritten.net>

pkgname="postybirb"
pkgver=2.3.42
pkgrel=1
pkgdesc="An application that helps artists post art and other multimedia to multiple websites more quickly."
url="https://www.postybirb.com"
arch=('any')

## Node uses different arch names than makepkg
case "$CARCH" in
	i686)    _arch=ia32;;
	x86_64)  _arch=x64;;
	armv7h)  _arch=armv7l;;
	aarch64) _arch=arm64;;
	*)       _arch=DUMMY;;
esac

license=('BSD')
depends=('electron12')
makedepends=('npm' 'nodejs-lts-fermium' 'python2')
source=("$pkgname-v$pkgver.tar.gz::https://github.com/mvdicarlo/postybirb//archive/v${pkgver}.tar.gz"
        "${pkgname%}.desktop"
        "${pkgname%}.sh"
        "buildOptimizer.patch")
sha512sums=('53c9205bceac3fb329b0a280e5fb7c1be5158b8a2d2d856cc3eefd03212fc4c505eef0ee267e31002e8147741b6c3d8ba234a2b5112d3fb7359ea5c68c358add'
            '313afe3d7f1ea7da37cfff24d3976fbc926739d76d03114dd7d237ff91221ccc5ab28fcb3d3ab14b31235bd0de20e07b39ba1f42caba7f22ae3a2278e75384fd'
            '60401f5c094cab8d41475da350178e969a86d940c3d132999277cee84d78203d0e23e109fb0886daa831387bb3ec6db9f0e1af940db61e3b9079304d703fa48c'
            'b4d3f076bb676bd7ac874177d6b06bae54d647c1c540dc800d20c05e90dbb537f1f406ae299e0c682b305485c343a7149fbcfbac04d5b1425e5d3e1e13e175e6')

prepare() {
    cd "$srcdir/${pkgname}-${pkgver}"
    #source /usr/share/nvm/init-nvm.sh && nvm install 15.14.0
    patch --strip=1 < ../buildOptimizer.patch
}

build() {
	cd "$srcdir/${pkgname}-${pkgver}"
	#source /usr/share/nvm/init-nvm.sh && nvm use --delete-prefix v15.14.0 --silent
	
	HOME="$srcdir/.node-gyp" npm ci
	sed -i "s|${srcdir}/${pkgname}-${pkgver}/node_modules/sshpk|.|g" node_modules/sshpk/package.json
	HOME="$srcdir/.node-gyp" npm run prod
	
	#use system electron version
	#see: https://wiki.archlinux.org/index.php/Electron_package_guidelines
	electronDist=/usr/lib/electron12/
    electronVer=$(electron12 --version | tail -c +2)
    
	cd "$srcdir/${pkgname}-${pkgver}/electron"
	export npm_config_target=${electronVer}
    export npm_config_arch=${_arch}
    export npm_config_target_arch=${_arch}
    export npm_config_disturl=https://atom.io/download/electron
    export npm_config_runtime=electron
    export npm_config_build_from_source=true
    sed -i '/"electron":/d' package.json
    HOME="$srcdir/.node-gyp" npm ci
    sed -i "s|${srcdir}/${pkgname}-${pkgver}/electron/node_modules/sshpk|.|g" node_modules/sshpk/package.json
    ./node_modules/.bin/electron-builder --linux --${_arch} --dir=release -c.electronDist=$electronDist \
         -c.electronVersion=$electronVer
}


package() {
    cd "$srcdir/${pkgname}-${pkgver}"
    
    install -dm755 "${pkgdir}/usr/lib/${pkgname}"
    cp -dr --no-preserve=ownership electron/release/linux-unpacked/resources/* "${pkgdir}/usr/lib/${pkgname}/"
    
    install -Dm644 electron/build/icons/icon_256x256x32.png "$pkgdir/usr/share/icons/hicolor/256x256/apps/${pkgname}.png"
    
    install -dm755 "${pkgdir}/usr/bin"
    install -Dm755 "$srcdir/${pkgname%}.sh" "$pkgdir/usr/bin/${pkgname%}"
    
    install -Dm644 LICENSE.md "${pkgdir}/usr/share/licenses/postybirb/LICENSE"
    
    install -Dm644 "$srcdir/${pkgname%}.desktop" -t "$pkgdir/usr/share/applications"
}
