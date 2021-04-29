#!/usr/bin/env bash
# Maintainer: Hunter Peavey < printf "dev@die.bots" | sed "s/die.bots/krathalan.net/g" >
# shellcheck disable=SC2034
# shellcheck disable=SC2154

# General package information
pkgname=krack
pkgver=0.4.1
pkgrel=1
pkgdesc="Krathalan's packaging softwares"
url="https://github.com/krathalan/krack"
license=("GPL3")
arch=("any")

# Files in /etc, keep these if the package upgrades!
backup=("etc/krack/build.conf" "etc/krack/receive.conf")

# Dependencies
depends=("brotli" "ccache" "devtools" "git" "gnupg" "rsync")
makedepends=("git" "scdoc")
conflicts=("krack-git")

# Download information
source=("${url}/archive/refs/tags/${pkgver}.tar.gz"
        "${url}/releases/download/${pkgver}/${pkgver}.tar.gz.sig")
sha256sums=("606cf4783d189f6670eb1e65372cb5eddedc8daf367b8157b1f71ba96f467b1f"
            "08bb8401eda586b9fabee0ff7a85096c5a013ee255ecbdf8e7656c5d36378ca9")
validpgpkeys=("0C6B73F391FA26F0EBCD1F75C0F9AEE56E47D174")

build()
{
  # Generate man pages
  cd "${srcdir}/${pkgname}-${pkgver}/man" || exit

  for manpage in ./*.scd; do
    scdoc < "${manpage}" > "${manpage%.scd}"
  done
}

package()
{
  cd "${srcdir}/${pkgname}-${pkgver}" || exit

  # /etc conf
  install -D -m644 etc/build.conf "${pkgdir}/etc/krack/build.conf"
  install -D -m644 etc/receive.conf "${pkgdir}/etc/krack/receive.conf"

  # bin
  install -D -m755 bin/krack-build "${pkgdir}/usr/bin/krack-build"
  install -D -m755 bin/krackctl "${pkgdir}/usr/bin/krackctl"

  # lib
  install -D -m755 lib/build "${pkgdir}/usr/lib/krack/build"
  install -D -m755 lib/common "${pkgdir}/usr/lib/krack/common"
  install -D -m755 lib/receive "${pkgdir}/usr/lib/krack/receive"

  # man
  install -D -m644 man/krack-build.1 "${pkgdir}/usr/share/man/man1/krack-build.1"
  install -D -m644 man/krack-receive.1 "${pkgdir}/usr/share/man/man1/krack-receive.1"
  install -D -m644 man/krack.1 "${pkgdir}/usr/share/man/man1/krack.1"
  install -D -m644 man/krackctl.1 "${pkgdir}/usr/share/man/man1/krackctl.1"

  # bash completion
  install -D -m644 bash-completion/krackctl "${pkgdir}/usr/share/bash-completion/completions/krackctl"

  # systemd service
  install -D -m644 lib/systemd/system/krack-receive.service "${pkgdir}/usr/lib/systemd/system/krack-receive.service"
}
