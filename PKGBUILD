# Maintainer: kpcyrd <kpcyrd[at]archlinux[dot]org>
# Contributor: Jean Lucas <jean@4ray.co>
# This package is just an adaptation of the signal-desktop package
# that is in the official repos in order to provide a beta version
# of signal that does not use precompiled binaries.
# AUR Maintainer: Eduard Tolosa <edu4rdshl@protonmail.com>

pkgname=signal-desktop-beta
_pkgname=Signal-Desktop
pkgver=1.39.6beta1
pkgrel=1
pkgdesc="Signal Private Messenger for Linux"
license=('GPL3')
replaces=('signal-desktop-beta-bin')
arch=('x86_64')
url="https://signal.org"
depends=('libvips' 'libxss' 'hicolor-icon-theme')
makedepends=('yarn' 'git' 'nodejs>=12.13.0' 'npm' 'python')
source=(
  "${pkgname}-${pkgver//beta*}.tar.gz::https://github.com/signalapp/${_pkgname}/archive/v${pkgver//beta*}-beta.${pkgver##*beta}.tar.gz"
  "${pkgname}.desktop"
  "openssl-linking.patch"
  "expire-from-source-date-epoch.patch"
)
sha512sums=('1488e6a920caaa2f46f4c39dc36e005028c9e03376a9747f2a180030c6c64d27a0509b0895f7b91ac98e59a8a8320fac9ac361f56b0514e42155502f322c77ec'
            'b92c877f6673b3eaae94ca5623ab92f0e5676d439aaf7dc7424ce74f5a5786d30886e0b1013f0ef68a4ced53cdd16a2f78df8f1e41c039d61a980edf678f3e70'
            '6b846fdf70dae6c4657de523ec133d2f08325740863660b86e75d032bb07a4b97834ba0eeea4c77000c2c20b11739b8e8deaf06584f9279638e640c4b7633dd5'
            '6673066172d6c367961f3e2d762dd483e51a9f733d52e27d0569b333ad397375fd41d61b8a414b8c9e8dbba560a6c710678b3d105f8d285cb94d70561368d5a2')

prepare() {
  cd "${_pkgname}-${pkgver//beta*}-beta.${pkgver##*beta}"

  # Allow higher Node versions
  sed 's#"node": "#&>=#' -i package.json

  # Select node-gyp versions with python3 support
  sed 's#"node-gyp": "5.0.3"#"node-gyp": "6.1.0"#' -i package.json
  # https://github.com/sass/node-sass/pull/2841
  # https://github.com/sass/node-sass/issues/2716
  sed 's#"resolutions": {#"resolutions": {"node-sass/node-gyp": "^6.0.0",#' -i package.json
  yarn install --ignore-engines

  # Have SQLCipher dynamically link from OpenSSL
  # See https://github.com/signalapp/Signal-Desktop/issues/2634
  patch --forward --strip=1 --input="${srcdir}/openssl-linking.patch"

  # We can't read the release date from git so we use SOURCE_DATE_EPOCH instead
  patch --forward --strip=1 --input="${srcdir}/expire-from-source-date-epoch.patch"
}

build() {
  cd "${_pkgname}-${pkgver//beta*}-beta.${pkgver##*beta}"

  # Gruntfile expects Git commit information which we don't have in a tarball download
  # See https://github.com/signalapp/Signal-Desktop/issues/2376
  yarn generate exec:build-protobuf exec:transpile concat copy:deps sass
  yarn prepare-beta-build
  yarn build-release --dir
}

package() {
  cd "${_pkgname}-${pkgver//beta*}-beta.${pkgver##*beta}"

  install -d "${pkgdir}/usr/"{lib,bin}
  cp -a release/linux-unpacked "${pkgdir}/usr/lib/${pkgname}"
  ln -s "/usr/lib/${pkgname}/${pkgname}" "${pkgdir}/usr/bin/"

  chmod u+s "${pkgdir}/usr/lib/${pkgname}/chrome-sandbox"

  install -Dm 644 "../${pkgname}.desktop" -t "${pkgdir}/usr/share/applications"
  for i in 16 24 32 48 64 128 256 512 1024; do
    install -Dm 644 "build/icons/png/${i}x${i}.png" \
      "${pkgdir}/usr/share/icons/hicolor/${i}x${i}/apps/${pkgname}.png"
  done
}

# vim: ts=2 sw=2 et:
