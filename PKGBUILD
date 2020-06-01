# This is an example PKGBUILD file. Use this as a start to creating your own,
# and remove these comments. For more information, see 'man PKGBUILD'.
# NOTE: Please fill out the license field for your package! If it is unknown,
# then please put 'unknown'.

# Maintainer: Your Name <youremail@domain.com>
pkgname=st-jacob-git
pkgver=0.8.3.r6.ee5ae82
pkgrel=1
pkgdesc="This Jacob McDonnell's build of st see the repo for more details"
arch=(x86_64 i686)
url="https://gitlab.com/Jacob_McDonnell/st.git"
license=('MIT/X Consortium License')
depends=(libxft-bgra)
makedepends=(git make)
optdepends=(dmenu xurls xclip python-pywal ttf-joypixels)
provides=(st)
conflicts=(st)
source=("git+$url")
md5sums=('SKIP')

pkgver(){
	cd st
	_pkgver=$(awk '/VERSION/ {print $3}' config.mk|head -1)
 	echo "${_pkgver}.r$(git rev-list --count HEAD).$(git rev-parse --short HEAD)"
}

package() {
	cd st
	mkdir -p ${pkgdir}/opt/${pkgname}
	cp -rf * ${pkgdir}/opt/${pkgname}
	make PREFIX=/usr DESTDIR="${pkgdir}" install
	install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
	install -Dm644 README.md "${pkgdir}/usr/share/doc/${pkgname}/README.md"
}
