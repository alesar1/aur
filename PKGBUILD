# Maintainer: Guillaume Raffin <theelectronwill@gmail.com>
# Generator: Bloop release utilities <https://github.com/scalacenter/bloop>
pkgname=bloop
pkgver=1.3.3
pkgrel=2
pkgdesc="Bloop gives you fast edit/compile/test workflows for Scala."
arch=(any)
url="https://scalacenter.github.io/bloop/"
license=('Apache')
depends=('scala' 'python')
source=("install-bloop-1.3.3.py::https://github.com/scalacenter/bloop/releases/download/v1.3.3/install.py")
sha256sums=('31da9f6fda0522b2abf6230901b60c77d38bcb215fc8a22c74e1a92f49475bbf')

build() {
  python ./install-bloop-1.3.3.py --dest "$srcdir/bloop"
  # fix paths
  sed -i "s|$srcdir/bloop|/usr/bin|g" bloop/systemd/bloop.service
  sed -i "s|$srcdir/bloop/xdg|/usr/share/pixmaps|g" bloop/xdg/bloop.desktop
  sed -i "s|$srcdir/bloop|/usr/lib/bloop|g" bloop/xdg/bloop.desktop
}

package() {
  cd "$srcdir/bloop"

  ## binaries
  # we use /usr/lib/bloop so that we can add a .jvmopts file in it
  install -Dm755 blp-server "$pkgdir"/usr/lib/bloop/blp-server
  install -Dm755 blp-coursier "$pkgdir"/usr/lib/bloop/blp-coursier
  install -Dm755 bloop "$pkgdir"/usr/lib/bloop/bloop

  # links in /usr/bin
  mkdir -p "$pkgdir/usr/bin"
  ln -s /usr/lib/bloop/blp-server "$pkgdir"/usr/bin/blp-server
  ln -s /usr/lib/bloop/blp-coursier "$pkgdir"/usr/bin/blp-coursier
  ln -s /usr/lib/bloop/bloop "$pkgdir"/usr/bin/bloop

  # desktop file
  install -Dm644 xdg/bloop.png "$pkgdir"/usr/share/pixmaps/bloop.png
  install -Dm755 xdg/bloop.desktop "$pkgdir"/usr/share/applications/bloop.desktop

  # shell completion
  install -Dm644 bash/bloop "$pkgdir"/etc/bash_completion.d/bloop
  install -Dm644 zsh/_bloop "$pkgdir"/usr/share/zsh/site-functions/_bloop
  install -Dm644 fish/bloop.fish "$pkgdir"/usr/share/fish/vendor_completions.d/bloop.fish

  # systemd service
  install -Dm644 systemd/bloop.service "$pkgdir"/usr/lib/systemd/user/bloop.service
}
