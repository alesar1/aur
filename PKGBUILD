# Maintainer: Chris Billington <chrisjbillington@gmail.com>
_pkgname=linux-hardened
_pkgver=5.15.31.hardened1
_kernver=5.15.31
_hardenedver=hardened1
_pkgrel=1
pkgbase="${_pkgname}-versioned-bin"
_KERNNAME=5.15.31-hardened1-1-hardened
_versioned_pkgname="linux${_pkgver}-${_pkgrel}-hardened"
pkgname=("${_pkgname}-versioned-bin"
         "${_pkgname}-versioned-headers-bin"
         "${_pkgname}-versioned-docs-bin"
         "${_versioned_pkgname}-bin"
         "${_versioned_pkgname}-headers-bin"
         "${_versioned_pkgname}-docs-bin")
pkgver=${_pkgver}
pkgrel=${_pkgrel}
pkgdesc="The Security-Hardened Linux kernel and modules | repackaged with a unique package name for each version"
url="https://github.com/anthraxx/linux-hardened"
arch=(x86_64)
license=(GPL2)
options=('!strip')

_kernpkg=${_pkgname}-${_pkgver}-${_pkgrel}-${arch}.pkg.tar.zst
_headerspkg=${_pkgname}-headers-${_pkgver}-${_pkgrel}-${arch}.pkg.tar.zst
_docspkg=${_pkgname}-docs-${_pkgver}-${_pkgrel}-${arch}.pkg.tar.zst

# See if the sources are available from our own mirror:
_kernsrc=$(pacman -Spdd "${_pkgname}" 2> /dev/null)
_headerssrc=$(pacman -Spdd "${_pkgname}-headers" 2> /dev/null)
_docssrc=$(pacman -Spdd "${_pkgname}-docs" 2> /dev/null)

# If not, then use the Arch Linux archive:
if [ "$(basename "${_kernsrc}" 2> /dev/null)" != "${_kernpkg}" ]; then
  _arch_archive=https://archive.archlinux.org/packages/.all
  _kernsrc=${_arch_archive}/${_kernpkg}
  _headerssrc=${_arch_archive}/${_headerspkg}
  _docssrc=${_arch_archive}/${_docspkg}
fi

source=("${_kernsrc}"
        "${_headerssrc}"
        "${_docssrc}")

noextract=("${source[@]##*/}")

sha256sums=('0fdf6073aa41b664d1eee5e93d3ade35e0788e5202bf62af29e7bca9f760bd13'
            '643ccec539dfbb702f964aca955fe8189c62c286041f824e35f6ac832da18f14'
            'b4af5a0e4d75b2fd5ee955aa1cec67c154e053ac1570245a4531a7fa73582487')

package_linux-hardened-versioned-bin() {
  pkgdesc="Dummy package depending on ${_versioned_pkgname}-bin"  
  depends=("${_versioned_pkgname}-bin")
  optdepends=('grub-hook: to run grub-mkconfig when kernels are added/removed')
}

package_linux-hardened-versioned-headers-bin() {
  pkgdesc="Dummy package depending on ${_versioned_pkgname}-headers-bin"  
  depends=("${_versioned_pkgname}-headers-bin")
}

package_linux-hardened-versioned-docs-bin() {
  pkgdesc="Dummy package depending on ${_versioned_pkgname}-docs-bin"  
  depends=("${_versioned_pkgname}-docs-bin")
}

package_linux5.15.31.hardened1-1-hardened-bin() {
  pkgdesc="The Security-Hardened Linux kernel and modules, version ${_KERNNAME}"
  depends=(coreutils
           initramfs
           kmod)
  conflicts=("${_pkgname}")
  optdepends=('crda: to set the correct wireless channels of your country'
              'linux-firmware: firmware images needed for some devices'
              'usbctl: deny_new_usb control')
  provides=(VIRTUALBOX-GUEST-MODULES
            WIREGUARD-MODULE)
  tar -xf "${_kernpkg}" -C "${pkgdir}"
  rm "${pkgdir}"/{.MTREE,.BUILDINFO,.PKGINFO}
  sed -ic "s/${_pkgname}/${_KERNNAME}/" "${pkgdir}/usr/lib/modules/${_KERNNAME}/pkgbase"
}

package_linux5.15.31.hardened1-1-hardened-headers-bin() {
  pkgdesc="Headers and scripts for building modules for the Security-Hardened Linux kernel ${_KERNNAME}"
  conflicts=("${_pkgname}-headers")
  tar -xf "${_headerspkg}" -C "${pkgdir}"
  rm "${pkgdir}"/{.MTREE,.BUILDINFO,.PKGINFO}
  mv "${pkgdir}/usr/src/"{"${_pkgname}","${_versioned_pkgname}"}
}

package_linux5.15.31.hardened1-1-hardened-docs-bin() {
  pkgdesc="Documentation for the Security-Hardened Linux kernel ${_KERNNAME}"
  conflicts=("${_pkgname}-docs")
  tar -xf "${_docspkg}" -C "${pkgdir}"
  rm "${pkgdir}"/{.MTREE,.BUILDINFO,.PKGINFO}
  mv "${pkgdir}/usr/share/doc/"{"${_pkgname}","${_versioned_pkgname}"}
}
