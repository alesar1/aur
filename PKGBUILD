# Maintainer: mickael9 <mickael9 at gmail dot com>
# Contributor: Peter Ivanov <ivanovp@gmail.com>
# Contributor: joat
# Submitter: BxS <bxsbxs at gmail dot com>

pkgname=microchip-mplabx-bin
pkgver=4.20
pkgrel=1
pkgdesc="IDE for Microchip PIC and dsPIC development"
arch=(i686 x86_64)
url='http://www.microchip.com/mplabx'
license=(custom)
depends=(gtk2 alsa-lib libxslt libxtst "java-runtime>=7" "java-openjfx")
makedepends=(fakechroot desktop-file-utils)
makedepends_x86_64=(lib32-fakechroot lib32-fakeroot)
optdepends=('microchip-mplabxc8-bin: C compiler for PIC10 PIC12 PIC16 PIC18 MCUs'
            'microchip-mplabxc16-bin: C compiler for PIC24 MCUs and dsPIC DSCs'
            'microchip-mplabxc32-bin: C Compiler for PIC32 MCUs'
            'microchip-mplabc18-bin: C compiler for PIC18 MCUs'
            'sdcc: C compiler for PIC16/18 MCUs'
            )
provides=(mplab)
conflicts=(mplab)
options=(!strip docs libtool emptydirs !zipman)
install="${pkgname}.install"

_mplabx_dir="/opt/microchip/mplabx/v${pkgver}"
_mplabx_installer="MPLABX-v${pkgver}-linux-installer"

_mplabcomm_dir="/opt/microchip/mplabcomm"

source=("http://ww1.microchip.com/downloads/en/DeviceDoc/${_mplabx_installer}.tar"
        "LICENSE")

md5sums=('0be93bc5d7db3fd28c98923fa9b0437c'
         'a34a85b2600a26f1c558bcd14c2444bd')

backup=("etc/mplab_ide.conf")

PKGEXT='.pkg.tar'

package() {
  mkdir -p "${pkgdir}"/{etc,usr/{bin,lib},tmp}

  # Create a fake chroot in $pkgdir to run the installer into
  ln -s /usr/bin "${pkgdir}/"

  echo "root:x:0:0:root:/root:/bin/bash" > "${pkgdir}/etc/passwd"
  echo "root:x:0:root" > "${pkgdir}/etc/group"

  echo "Extracting installers..."
  sh ${_mplabx_installer}.sh --tar xf ./${_mplabx_installer}.run
  mv ${_mplabx_installer}.run "${pkgdir}/tmp"
  chmod 0755 "${pkgdir}/tmp/${_mplabx_installer}.run"

  # Create install script in chroot
  cat << EOF > "${pkgdir}/tmp/install.sh"
#!/bin/sh
PATH=/bin
echo Running MPLABX installer...
tmp/${_mplabx_installer}.run --mode unattended
EOF

  chmod 0755 "${pkgdir}/tmp/install.sh"

  # Run the installer in the fake chroot
  fakechroot chroot "${pkgdir}" tmp/install.sh

  # Remove uninstaller files
  rm -f "${pkgdir}${_mplabx_dir}"/Uninstall_*

  # Fix permissions
  chmod -R og-w "${pkgdir}"

  # Fix ugly fonts
  sed -i 's/^default_options="/default_options="-J-Dawt.useSystemAAFontSettings=on /' "${pkgdir}${_mplabx_dir}/mplab_platform/etc/mplab_ide.conf"

  # Rename udev rules to avoid conflict with jlink-software-and-documentation
  mv "${pkgdir}"/etc/udev/rules.d/{99-jlink,98-jlink-mplabx}.rules

  # Patch jdkhome to use system JRE
  local conf
  for conf in etc/mplab_ide.conf etc/mplab_ipe.conf harness/etc/app.conf mplab_ipe/ipecmd.sh; do
    sed -i -r '\@^#?jdkhome=@c\jdkhome=/usr/lib/jvm/default-runtime/' "${pkgdir}${_mplabx_dir}/mplab_platform/${conf}"
  done

  # Move config file to /etc (and add a symlink into the old location)
  mv "${pkgdir}${_mplabx_dir}/mplab_platform/etc/mplab_ide.conf" "${pkgdir}/etc/"

  ln -sf /etc/mplab_ide.conf "${pkgdir}${_mplabx_dir}/mplab_platform/etc/"

  # Remove bundled JRE
  rm -rf "${pkgdir}${_mplabx_dir}/sys/java"
  rmdir "${pkgdir}${_mplabx_dir}/sys" # the intent here is to fail if something else than java is put into sys.

  # Move libs away from /usr/local/lib
  mv "${pkgdir}"/usr/local/lib/*.so{,.*} "${pkgdir}"/usr/lib/
  rm -rf "${pkgdir}/usr/local/"

  _mplabcomm_pkgdir=("${pkgdir}${_mplabcomm_dir}"/v*)
  _mplabcomm_version=$(basename "${_mplabcomm_pkgdir}")
  _mplabcomm_dstdir="${_mplabcomm_dir}/${_mplabcomm_version}"

  # Symlink executables
  ln -sf "${_mplabx_dir}/mplab_platform/bin/mplab_ide" "${pkgdir}/usr/bin/"
  ln -sf "${_mplabx_dir}/mplab_platform/bin/mdb.sh" "${pkgdir}/usr/bin/mdb"
  ln -sf "${_mplabx_dir}/mplab_platform/bin/prjMakefilesGenerator.sh" "${pkgdir}/usr/bin/prjMakefilesGenerator"
  ln -sf "${_mplabx_dir}/mplab_platform/bin/mplab_ipe" "${pkgdir}/usr/bin/"
  ln -sf "${_mplabcomm_dstdir}/lib/mchplinusbdevice" "${pkgdir}/etc/.mplab_ide/"

  # Symlink libs from MPLABCOMM
  local lib
  for lib in "${_mplabcomm_pkgdir}/lib/"*.so{,.*}; do
    local bname=$(basename "$lib")
    ln -sf "${_mplabcomm_dstdir}/lib/${bname}"  "${pkgdir}/usr/lib/"
  done

  # Correctly link .so.* -> .so for all libs
  for lib in "${pkgdir}"/usr/lib/*.so.*; do
    local bname=$(basename "$lib")
    local soname=${bname%.so.*}
    ln -sf ${bname} "${pkgdir}/usr/lib/${soname}.so"
  done

  # Tweak .desktop files for better desktop integration
  echo "StartupWMClass=MPLAB X IDE v${pkgver}" >> "${pkgdir}/usr/share/applications/mplab.desktop"
  echo "StartupWMClass=com-microchip-ipe-ui-ProdProgrammerApp" >> "${pkgdir}/usr/share/applications/mplab_ipe.desktop"

  # Install license files
  install -Dm 644 "${srcdir}"/LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
  install -Dm 644 "${_mplabcomm_pkgdir}"/MPLABCOMMLicense.txt "${pkgdir}/usr/share/licenses/${pkgname}/MPLABCOMMLicense.txt"

  # Cleanup
  rm "${pkgdir}"/{bin,etc/{group,passwd}}
  rm -r "${pkgdir}/tmp"
  # wtf
  rm -f "${_mplabcomm_pkgdir}"/MPLABCOMM-*.run
}

