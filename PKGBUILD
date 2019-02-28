# Maintainer: Nicola Hinssen <nicola.hinssen@gmail.com>
# Contributor: Bjorn Nostvold <bjorn.nostvold@gmail.com>
# Contributor: Maxime Gauduin <alucryd@archlinux.org>
# Contributor: Daniel Seymour <dannyseeless@gmail.com>

pkgname=emby-server-beta
pkgver=4.1.0.11
pkgrel=1
pkgdesc='Bring together your videos, music, photos, and live television'
arch=('any')
url='http://emby.media'
license=('custom')
depends=('dotnet-runtime' 'ffmpeg4.0' 'skia-sharp60' 
'sqlite')
install='emby-server.install'
provides=('emby-server')
conflicts=('emby-server')
source=("https://github.com/MediaBrowser/Emby.Releases/releases/download/${pkgver}/embyserver-netcore_${pkgver}.zip"
        'emby-server'
        'emby-migrate-database'
        'emby-server.conf'
        'emby-server.service'
        'emby-server.sysusers'
        'emby-server.tmpfiles')
backup=('etc/conf.d/emby-server')
sha256sums=('23114243c0dc84e59b49afa506b687846c85afc4b44de63f3291e5ff3ca7946a'
            '1f04c5dff2e1534bff101917a556295d63aae26c233446b252890ad58221e513'
            'e44692b24d69aef8568c6e68088e5a28e42584868a8936abcab9211c236c2a6b'
            'e6676f75bb12ba2b88da130be1272abb0e332f40e9fa043182a865e3d74a38fb'
            'c3caa13be8c010ad1730103f585293cdd46a7fe510af2effb2c8a9e9289566cb'
            'f7fa33949757ffc587ecf82496dc35ebc8c8e5c98b882b31dc40a24263d3921a'
            '16ead857a1756e3e8cfc3e70f481d14d791a262b79733065a4f7371f21a97abe')

prepare() {
  rm -rf system/{electron,runtimes}
}

package() {
  install -dm 755 "${pkgdir}"/{etc/conf.d,usr/{bin,lib/{systemd/system,sysusers.d,tmpfiles.d}}}
  cp -dr --no-preserve='ownership' system "${pkgdir}"/usr/lib/emby-server
  ln -s ../libSkiaSharp.so.60.0.0 "${pkgdir}"/usr/lib/emby-server/libSkiaSharp.so
  install -m 755 emby-server "${pkgdir}"/usr/bin/
  install -m 755 emby-migrate-database "${pkgdir}"/usr/bin/
  install -m 644 emby-server.service "${pkgdir}"/usr/lib/systemd/system/
  install -m 644 emby-server.sysusers "${pkgdir}"/usr/lib/sysusers.d/emby-server.conf
  install -m 644 emby-server.tmpfiles "${pkgdir}"/usr/lib/tmpfiles.d/emby-server.conf
  install -m 644 emby-server.conf "${pkgdir}"/etc/conf.d/emby-server
}
