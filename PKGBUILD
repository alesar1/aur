# Contributor: Thomas Fanninger <thomas@fanninger.at>
# Maintainer: Andreas Linz <alinz@klingt.net>
# Based on `caddy=all-features` by Eric Engestrom: https://aur.archlinux.org/packages/caddy-all-features/
# Enable Cross Origin Resource Sharing

pkgname=caddy-full-bin
_realname=caddy
pkgver=0.10.14
ghpkgrel=''
pkgrel=2
pkgdesc="A configurable, general-purpose HTTP/2 web server for any platform (All features enabled)"
arch=('i686' 'x86_64' 'armv7h' 'aarch64' 'armv6h')
url="https://caddyserver.com"
license=('Apache')
provides=('caddy')
conflicts=('caddy' 'caddy-git' 'caddy-all-features')
depends=('systemd>=229')
makedepends=('patch')
md5sums_i686=('861495fb985c35f92769d7455c17807a'
              'ce5f9e54ab24ce0598da6c909995be9a')
md5sums_x86_64=('63ab2db053b4f8b154b2f17ba1c71aa8'
                'ce5f9e54ab24ce0598da6c909995be9a')
md5sums_armv7h=('3f5233eb467e09adb3d1731ba420c19c'
                'ce5f9e54ab24ce0598da6c909995be9a')
md5sums_aarch64=('3f5233eb467e09adb3d1731ba420c19c'
                 'ce5f9e54ab24ce0598da6c909995be9a')
md5sums_armv6h=('9016ca9ae8f887b6e8d1656354f6f39f'
                'ce5f9e54ab24ce0598da6c909995be9a')
install='caddy-full-bin.install'

source_i686=("https://github.com/klingtnet/caddy-release-downloader/releases/download/${pkgver}${ghpkgrel}/caddy-all-plugins-${pkgver}${ghpkgrel}-386.tar.gz" "caddy-systemd-service.patch")
source_x86_64=("https://github.com/klingtnet/caddy-release-downloader/releases/download/${pkgver}${ghpkgrel}/caddy-all-plugins-${pkgver}${ghpkgrel}-amd64.tar.gz" "caddy-systemd-service.patch")
source_armv7h=("https://github.com/klingtnet/caddy-release-downloader/releases/download/${pkgver}${ghpkgrel}/caddy-all-plugins-${pkgver}${ghpkgrel}-arm7.tar.gz" "caddy-systemd-service.patch")
source_aarch64=("https://github.com/klingtnet/caddy-release-downloader/releases/download/${pkgver}${ghpkgrel}/caddy-all-plugins-${pkgver}${ghpkgrel}-arm7.tar.gz" "caddy-systemd-service.patch")
source_armv6h=("https://github.com/klingtnet/caddy-release-downloader/releases/download/${pkgver}${ghpkgrel}/caddy-all-plugins-${pkgver}${ghpkgrel}-arm6.tar.gz" "caddy-systemd-service.patch")

prepare() {
  msg2 "Patching systemd service file"
  patch -Np1 -i "${srcdir}/caddy-systemd-service.patch" "${srcdir}/init/linux-systemd/caddy.service"
}

package() {
  install -Dm755 "${srcdir}/caddy" "${pkgdir}/usr/bin/caddy"
  install -Dm644 "${srcdir}/init/linux-systemd/caddy.service" "${pkgdir}/usr/lib/systemd/system/caddy.service"
  install -Dm644 "${srcdir}/init/linux-systemd/README.md" "${pkgdir}/usr/share/doc/${_realname}/service.txt"
  install -Dm644 "${srcdir}/LICENSES.txt" "${pkgdir}/usr/share/licenses/${_realname}/LICENSE"
  install -Dm644 "${srcdir}/README.txt" "${pkgdir}/usr/share/doc/${_realname}/README.md"
  cat <<HEREDOC
Please note that all 'dns' plugins are omitted because one/some of them break the caddy build.
See https://github.com/mholt/caddy/issues/2040#event-1485201695 for details.
HEREDOC
}
