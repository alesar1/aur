# Maintainer: wszqkzqk <wszqkzqk@gmail.com>
# Maintainer: Skywol <skywol@qq.com>
# Maintainer: luosoy <249799588@qq.com>

pkgname=deepin-wine
pkgvers=2.18-24~rc3
pkgver=2.18_24
pkgrel=3
epoch=
pkgdesc="Deepin Wine"
arch=('i686' 'x86_64')
url="http://www.deepin.org"
license=('Proprietary')
groups=()
depends=('deepin-wine32' 'deepin-wine32-preloader' 'deepin-wine32-tools'  'deepin-wine-binfmt' 'deepin-wine-helper' 'deepin-fonts-wine' 'deepin-libwine' 'deepin-wine-uninstaller' 'deepin-udis86' 'lib32-gettext' 'lib32-libxcursor' 'lib32-fontconfig'  'lib32-mesa' 'lib32-lcms2' 'lib32-libjpeg6' 'lib32-libpulse' 'lib32-alsa-plugins' 'lib32-libxml2' 'lib32-libxrandr'  'lib32-libxi'  'lib32-glu'  'lib32-libldap' 'p7zip')
makedepends=('tar')
checkdepends=()
optdepends=('lib32-freetype2-infinality-ultimate: for better deepin-wine fonts performance')
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=
changelog=
source=("https://community-packages.deepin.com/deepin/pool/main/d/${pkgname}/${pkgname}_${pkgvers}_all.deb")
noextract=("${pkgname}_${pkgvers}_all.deb")
md5sums=('b3b3161ebe73dc1c90334dec26d0eeb3')
validpgpkeys=()

prepare() {
	ar -x ${pkgname}_${pkgvers}_all.deb
	mkdir ${pkgname}-${pkgvers}
	tar -xf data.tar.xz --directory="${pkgname}-${pkgvers}"	
}

package() {
	cd "${pkgname}-${pkgvers}"
	cp ./lib ./usr/ -rf
	rm ./lib -rf
	cp -r ./ ${pkgdir}/
}
