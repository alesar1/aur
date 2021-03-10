# Maintainer: SZanko <szanko at protonmail dot org>

_name=dvc
pkgname=$_name-bin
pkgver=2.0.5
pkgrel=1
pkgdesc="Open-source version control system for data science projects as a binary"
arch=('x86_64')
url="https://github.com/iterative/dvc"
license=('APACHE')
conflicts=('dvc')
depends=('python' 'libarchive')
#makedepends=('rpm-tools')
optdepends=(
	'zsh-completions'
	'bash-completion'
)
source=("${url}/releases/download/${pkgver}/${_name}-${pkgver}-1.x86_64.rpm")
sha256sums=('bec7d552b64e283a43d461431a2dbc4c31411577e0c24687f489ec83e1d8005a')


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
