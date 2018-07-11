# Maintainer: Nicola Hinssen <nicola.hinssen@gmail.com>
# Contributor: Bjorn Nostvold <bjorn.nostvold@gmail.com>
# Contributor: Maxime Gauduin <alucryd@archlinux.org>
# Contributor: Daniel Seymour <dannyseeless@gmail.com>

pkgname=emby-server-beta
pkgver=3.4.1.31
pkgrel=1
pkgdesc='Bring together your videos, music, photos, and live television'
arch=('any')
url='http://emby.media'
license=('GPL2')
depends=('dotnet-runtime' 'ffmpeg' 'skia-sharp58' 'sqlite')
install='emby-server.install'
provides=('emby-server')
conflicts=('emby-server')
source=("https://github.com/MediaBrowser/Emby.Releases/releases/download/${pkgver}/embyserver-netcore-${pkgver}.zip"
        'emby-server'
        'emby-migrate-database'
        'emby-server.conf'
        'emby-server.service'
        'emby-server.sysusers'
        'emby-server.tmpfiles')
backup=('etc/conf.d/emby-server')
sha256sums=('5fc8b449d4f61f751cd9e79cc09296a4ab79011892bfb303203ba8dbfa95b7e2'
            '1f04c5dff2e1534bff101917a556295d63aae26c233446b252890ad58221e513'
            'e44692b24d69aef8568c6e68088e5a28e42584868a8936abcab9211c236c2a6b'
            'e6676f75bb12ba2b88da130be1272abb0e332f40e9fa043182a865e3d74a38fb'
            '5b9f22659156b5c788022b367bcabc874f669e8a9cef9fadf07eaf50b1b53419'
            'f7fa33949757ffc587ecf82496dc35ebc8c8e5c98b882b31dc40a24263d3921a'
            '16ead857a1756e3e8cfc3e70f481d14d791a262b79733065a4f7371f21a97abe')

prepare() {
  rm -rf system/{electron,runtimes}
}

package() {
  install -dm 755 "${pkgdir}"/{etc/conf.d,usr/{bin,lib/{systemd/system,sysusers.d,tmpfiles.d}}}
  cp -dr --no-preserve='ownership' system "${pkgdir}"/usr/lib/emby-server
  install -m 755 emby-server "${pkgdir}"/usr/bin/
  install -m 755 emby-migrate-database "${pkgdir}"/usr/bin/
  install -m 644 emby-server.service "${pkgdir}"/usr/lib/systemd/system/
  install -m 644 emby-server.sysusers "${pkgdir}"/usr/lib/sysusers.d/emby-server.conf
  install -m 644 emby-server.tmpfiles "${pkgdir}"/usr/lib/tmpfiles.d/emby-server.conf
  install -m 644 emby-server.conf "${pkgdir}"/etc/conf.d/emby-server
}
