# Maintainer sakura1943 <1436700265@qq.com>
pkgname='xmind-bin'
_pkgname='XMind'
_pkgname_o='xmind'
pkgver='12.0.0'
_update_date='202203092327'
pkgrel=1
pkgdesc='XMind - The most popular mind mapping software.'
arch=('x86_64')
depends=()
license=('EPL' 'LGPL')
url='https://www.xmind.net'
provides=('xmind-bin')
install='install.install'
source=("${pkgname}-${pkgver}-${_update_date}.deb::https://dl2.xmind.cn/${_pkgname}-for-Linux-amd-64bit-${pkgver}-${_update_date}.deb")
sha256sums=('b83576c5960d848a8e04ab5f1a35b02aadf99f29c3c62a7ec1a03c6b2920efde')
## Install files
_install() {
find $2 -type f -exec install -Dm$1 {} $3/{} \;
}

## Prepare to install
prepare() {
	install -dm755 "${srcdir}"/"${_pkgname_o}"/data
	install -dm755 "${srcdir}"/"${_pkgname_o}"/control
	tar -zxf control.tar.gz -C "${srcdir}"/"${_pkgname_o}"/control
	tar -xf data.tar.xz -C "${srcdir}"/"${_pkgname_o}"/data
}

## Construct Package
package() {
	cd "${srcdir}"/"${_pkgname_o}"/data
	_install 755 usr "${pkgdir}"
	_install 755 opt "${pkgdir}"
	sed -i '3c Exec=xmind %F' "${pkgdir}"/usr/share/applications/"${_pkgname_o}".desktop
}
