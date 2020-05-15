# Maintainer: Daniel Moch <daniel@danielmoch.com>
# Contributor: Jean Lucas <jean@4ray.co>
# Contributor: Fredrick Brennan <copypaste@kittens.ph>

pkgname=mastodon
pkgver=3.1.4
pkgrel=1
pkgdesc='Self-hosted social media and network server based on ActivityPub and OStatus'
arch=(x86_64)
url=https://github.com/tootsuite/mastodon
license=(AGPL3)
depends=(ffmpeg
         imagemagick
         libidn
         libpqxx
         libxml2
         libxslt
         libyaml
         nodejs
         postgresql
         redis
         ruby-bundler
         protobuf
         yarn
         zlib)
makedepends=(git)
backup=(etc/mastodon.conf)
install=mastodon.install
source=(https://github.com/tootsuite/mastodon/archive/v$pkgver.tar.gz
        mastodon.target
        mastodon.sysusers.d
        mastodon.tmpfiles.d)
sha512sums=('14353e32ae68ad5799dd6387a4d8f9f744a1c60fb6809435e1153683168fa0450d1f710e8aef6c3e9cb09744c2b5ca567c901e5f5d0fe7bd9baa851a5de1d664'
            'c9820c2a83d08bd5d842a78e924682db97ebd5c7291b682603ad30dafcdcc5816c13e717ad39554f042b9d9ed71ab902ce3f604952264a900a72612ee8060acb'
            '4ee4210bde391e6dc782cb7c14f2cb968c95ad541aa0efcf843a811f8cc5f0d1067ee3c8346bb412aa9fd1dd5a8bd05a4524df7dc4a106957009853dd237074a'
            '73493680845e690d0cfd769fbbe68978c0a615602375078aea945ca1f1011404eb4b64972aec7a6e5efa720fb425d91b3f30025391c38ccf77e070ccb391e710')

prepare() {
  cd mastodon-$pkgver

  # Allow use of any bundler
  sed -i -e '/BUNDLED/,+1d' Gemfile.lock

  # Allow use of higher Node minor versions
  sed -i 's/"node": "/&^/' package.json
}

build() {
  cd mastodon-$pkgver
  bundle config set deployment 'true'
  bundle config set without 'development test'
  bundle install -j$(getconf _NPROCESSORS_ONLN)
  yarn install --pure-lockfile
}

package() {
  install -d "$pkgdir"/{var/lib,etc}
  cp -a mastodon-$pkgver "$pkgdir"/var/lib/mastodon

  # Put the config file in /etc and link to it
  touch "$pkgdir"/etc/mastodon.conf
  ln -s /etc/mastodon.conf "$pkgdir"/var/lib/mastodon/.env.production
  ln -s /usr/bin/node "$pkgdir"/var/lib/mastodon/node

  install -Dm 644 mastodon.target -t "$pkgdir"/usr/lib/systemd/system
  install -Dm 644 mastodon.sysusers.d "$pkgdir"/usr/lib/sysusers.d/mastodon.conf
  install -Dm 644 mastodon.tmpfiles.d "$pkgdir"/usr/lib/tmpfiles.d/mastodon.conf

  cd mastodon-$pkgver/dist

  # Fix path discrepancies
  for f in mastodon-*.service; do
    sed -e '0,/home/s/home/var\/lib/' \
      -e 's/\/live//' \
      -e 's/=\/usr\/bin/=\/var\/lib\/mastodon/' \
      -e 's/home\/mastodon\/.rbenv\/shims/usr\/bin/' \
      -i $f
  done

  install -Dm 644 mastodon-*.service -t "$pkgdir"/usr/lib/systemd/system
}
