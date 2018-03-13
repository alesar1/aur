# Submitter: Marco Cirillo <maranda@lightwitch.org>
# Maintainer: Marco Cirillo <maranda@lightwitch.org>
# Co-Maintainer: Maxime “pep” Buquet <archlinux@bouah.net>

pkgname=metronome-git
pkgver=3.8
pkgrel=1
pkgdesc="Metronome IM XMPP Server Development"
arch=('i686' 'x86_64')
url="https://metronome.im/"
license=('MIT' 'ISC')
depends=('lua51' 'lua51-socket' 'lua51-expat' 'lua51-filesystem' 'lua51-event'
   'lua51-sec' 'libidn' 'openssl' 'libevent-compat')
optdepends=('lua51-zlib: compression support')
makedepends=('git')
backup=('etc/metronome/metronome.cfg.lua')
source=('metronome::git+https://github.com/maranda/metronome.git'
        'metronome.service'
        'metronome.sysusers'
        'metronome.tmpfiles')

_repo='metronome'

pkgver() {
  cd $srcdir/$_repo
  cat metronome.release
}

build() {
  cd "$srcdir/$_repo"
  ./configure --ostype=linux --prefix=/usr \
  --with-lua-include=/usr/include/lua5.1 --with-lua=/usr/bin/lua5.1 \
  --with-lua-lib=/usr/lib/lua/5.1 --lua-suffix=5.1 \
  --sysconfdir=/etc/metronome --datadir=/var/lib/metronome
  make
}

package() {
  cd "$srcdir/$_repo"
  make DESTDIR="$pkgdir" install

  install -dm755 "$pkgdir/var/log/metronome" "$pkgdir/run/metronome"
  install -Dm644 scripts/logrotate "$pkgdir/etc/logrotate.d/metronome"
  install -Dm644 LICENSE "$pkgdir/usr/share/licences/$pkgname/LICENCE"
  install -Dm644 "$srcdir/metronome.service" \
    "$pkgdir/usr/lib/systemd/system/metronome.service"

  cd ..
  install -Dm644 metronome.sysusers "$pkgdir/usr/lib/sysusers.d/$pkgname.conf"
  install -Dm644 metronome.tmpfiles "$pkgdir/usr/lib/tmpfiles.d/$pkgname.conf"
}

# vim:set ts=2 sw=2 et:
sha256sums=('SKIP'
            '86fe5add63a84762433219969a914dd3e680cc4bd6e73904b72ada470666c541'
            '6b1fed75dd6fcd23023cb0da1509afc7f12eb9d3948cf9f328a22608acdcb889'
            '378ca207ffc02824282de9c477f945c4cb9cabc41b73a39eeeb136e7e9178a36')
