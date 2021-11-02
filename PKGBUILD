# Maintainer: Arturo Penen <apenen@gmail.com>

pkgname=kubech
pkgver=0.0.3
pkgrel=1
_commit=f2e337ed1bf8b92db3e84be16c53654cbb9c56cd
pkgdesc='Set kubectl contexts/namespaces per shell/terminal to manage multi Kubernetes cluster at the same time.'
arch=('x86_64')
url='https://github.com/aabouzaid/kubech'
license=('Apache')
makedepends=('git' 'go')
source=("git://github.com/aabouzaid/kubech.git#commit=$_commit"
        )
sha256sums=('SKIP'
            )
package() {
  mkdir -p $pkgdir/opt/kubech/completion
  install -Dm755 $srcdir/kubech/kubech "$pkgdir/opt/kubech/kubech"
  install -Dm755 $srcdir/kubech/kubechc "$pkgdir/opt/kubech/kubechc"
  install -Dm755 $srcdir/kubech/kubechn "$pkgdir/opt/kubech/kubechn"
  install -Dm755 $srcdir/kubech/completion/kubech.bash "$pkgdir/opt/kubech/completion/kubech.bash"
  
  mkdir -p $pkgdir/etc/profile.d
  echo "source $pkgdir/opt/kubech/kubech" > $pkgdir/etc/profile.d/kubech.sh
  install -Dm644 $srcdir/kubech/completion/kubech.bash "$pkgdir/usr/share/bash-completion/completions/kubech"
  #install -Dm644 kubech/completion/kubech.zsh "$pkgdir/usr/share/zsh/site-functions/_kubech"
}

