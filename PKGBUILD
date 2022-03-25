
_pkgname=minq-nhentai
pkgname="${_pkgname}-git"
pkgver=r48.e43eba9519d278402556fcd1185765bd4e1d96e9
pkgrel=1
epoch=
pkgdesc='Browse hnehtai in your terminal. Full image resolution in supported terminals.'
arch=(any)
url="https://github.com/kuche1/${_pkgname}.git"
license=('GPL')
depends=(python python-beautifulsoup4 viu)
makedepends=(git)
checkdepends=()
optdepends=("wezterm: an example terminal that supports full image resolution"
            "python-minq-caching-thing-git: needed for the beta version")
provides=("${_pkgname}")
source=("git+$url")
md5sums=("SKIP")

pkgver() {
	cd "${_pkgname}"
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse HEAD)"
}

package() {
	cd "${_pkgname}"
	mkdir -p "${pkgdir}/opt/${pkgname}"
	cp -rf * "${pkgdir}/opt/${pkgname}"
	install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
	install -Dm644 README.md "${pkgdir}/usr/share/doc/${pkgname}/README.md"
	mkdir -p "${pkgdir}/usr/bin/"
	ln -s "/opt/${pkgname}/${_pkgname}.py" "${pkgdir}/usr/bin/${_pkgname}"
	ln -s "/opt/${pkgname}/${_pkgname}-beta.py" "${pkgdir}/usr/bin/${_pkgname}-beta"
}
