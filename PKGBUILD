# Maintainer: Mark Wagie <yochanan dot marqos at gmail dot com>
pkgname=nemo-deja-dup-git
_pkgname=nemo-actions
pkgver=r2.f99427f
pkgrel=1
pkgdesc="Déjà Dup Actions for Nemo File Manager"
arch=('any')
url="https://github.com/erickj/nemo-actions"
license=('GPL')
depends=('nemo')
source=("$_pkgname"::'git+https://github.com/erickj/nemo-actions.git')
md5sums=('SKIP')

pkgver() {
	cd "$srcdir/$_pkgname"
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
	cd "$srcdir/$_pkgname"
	install -Dm755 deja-dup_restore-missing.nemo_action "$pkgdir/usr/share/nemo/actions/deja-dup_restore-missing.nemo_action"
    install -Dm755 deja-dup_revert.nemo_action "$pkgdir/usr/share/nemo/actions/deja-dup_revert.nemo_action"
}
