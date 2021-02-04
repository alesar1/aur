# Maintainer: SZanko <szanko at protonmail dot org>

_name=dvc
pkgname=$_name-bin
pkgver=1.11.15
pkgrel=1
pkgdesc="Python port of the parser used internally by GNU bash"
arch=('x86_64')
url="https://github.com/iterative/dvc"
license=('APACHE')
conflicts=('dvc')
depends=('python')
makedepends=('rpm-tools')
optdepends=(
	'zsh-completions'
	'bash-completion'
)
source=("${url}/releases/download/${pkgver}/${_name}-${pkgver}-1.x86_64.rpm")
sha256sums=('296cd234ffa08f68b9c62be0643c86603bb46b2ba65304cc613a52d40d9dbed1')


package() {
	cd $srcdir
    # install -Dm755 -t ${pkgdir}/usr/bin usr/bin/dvc
	mkdir -p ${pkgdir}/usr/lib/dvc
	cp -R usr/lib ${pkgdir}/usr/lib/dvc
	cp -R usr/bin ${pkgdir}/usr/lib/dvc
	chmod -R 755 ${pkgdir}/usr/lib/dvc
	install -Dm644 -t ${pkgdir}/usr/share/zsh/site-functions usr/share/zsh/site-functions/_dvc/_dvc
	install -Dm644 -t ${pkgdir}/etc/bash_completion.d etc/bash_completion.d/dvc
	mkdir ${pkgdir}/usr/bin
	ln -s /usr/lib/dvc/bin/dvc ${pkgdir}/usr/bin/dvc
}
