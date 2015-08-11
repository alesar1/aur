# Maintainer: Ganesh Ajjanagadde <gajjanagadde@gmail.com>

pkgname=vim-commentary-git
pkgver=20150727
pkgrel=1
pkgdesc="Comment stuff out"
arch=('any')
url="https://github.com/tpope/vim-commentary"
license=('custom:vim')
depends=("vim>=7.0")
makedepends=("git")
provides=("vim-commentary")
conflicts=("vim-commentary")
groups=('vim-plugins')
source=('git+https://github.com/tpope/vim-commentary.git')
install=vimdoc.install
md5sums=('SKIP')
sha256sums=('SKIP')

pkgver()
{
    cd "$srcdir/vim-commentary"
    git show -s --format="%ci" HEAD | cut -f1 -d" " | sed 's\[- :]\\g'
}

package()
{
    installpath="${pkgdir}/usr/share/vim/vimfiles"
    cd vim-commentary
    install -Dm644 doc/commentary.txt ${installpath}/doc/commentary.txt
    install -Dm644 plugin/commentary.vim ${installpath}/plugin/commentary.vim
}
