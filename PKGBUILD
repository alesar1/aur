# Maintainer: Ian Beringer <ian@ianberinger.com>

pkgname=kubectx
pkgver=0.5.1
pkgrel=1
license=('Apache')
pkgdesc='Utility to manage and switch between kubectl contexts and Kubernetes namespaces'
makedepends=()
depends=('python')
arch=('any')
url='https://github.com/ahmetb/kubectx'
source=("${url}/archive/v${pkgver}.tar.gz")
sha256sums=('05bdd786a91d1b16c6792c2d68029b4400f1da59b834206e5e2e61255d1cfe64')
provides=('kubectx' 'kubens')

package() {
	cd "${srcdir}/${pkgname}-${pkgver}"

	install -D -p -m 755 ./kubectx "${pkgdir}/usr/share/${pkgname}/kubectx"
	install -D -p -m 755 ./kubens "${pkgdir}/usr/share/${pkgname}/kubens"

	# completion for bash & zsh
	install -D -p -m 644 ./completion/kubectx.bash "${pkgdir}/usr/share/bash-completion/completions/kubectx"
	install -D -p -m 644 ./completion/kubens.bash "${pkgdir}/usr/share/bash-completion/completions/kubens"
	install -D -p -m 644 ./completion/kubectx.zsh "${pkgdir}/usr/share/zsh/site-functions/_kubectx"
	install -D -p -m 644 ./completion/kubens.zsh "${pkgdir}/usr/share/zsh/site-functions/_kubens"

	# symlink binaries
	mkdir "${pkgdir}/usr/bin"
	ln -s "/usr/share/${pkgname}/kubectx" "${pkgdir}/usr/bin/kubectx"
	ln -s "/usr/share/${pkgname}/kubens" "${pkgdir}/usr/bin/kubens"
}
