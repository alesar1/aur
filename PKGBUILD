# Author: Janusz Lewandowski <lew21@xtreeme.org>
# Contributor: David McFarland <corngood@gmail.com>
# Maintainer: Andrew Shark <ashark @at@ linuxcomp.ru>
# Autogenerated from AMD's Packages file
# with https://github.com/Ashark/archlinux-amdgpu-pro/blob/master/gen-PKGBUILD.py

major=20.30
minor=1109583
ubuntu_ver=20.04

pkgbase=amdgpu-pro-installer
pkgname=(
amdgpu-core-meta
amdgpu-pro-core-meta
amf-amdgpu-pro
hip-amdgpu-pro
amdgpu-pro-libgl
lib32-amdgpu-pro-libgl
opencl-amdgpu-pro-comgr
opencl-amdgpu-pro-dev
opencl-amdgpu-pro-pal
opencl-amdgpu-pro-orca
lib32-opencl-amdgpu-pro-orca
vulkan-amdgpu-pro
lib32-vulkan-amdgpu-pro
)
pkgver=${major}_${minor}
pkgrel=1
arch=('x86_64')
url=https://www.amd.com/en/support/kb/release-notes/rn-amdgpu-unified-linux-20-30
license=('custom: multiple')
groups=('Radeon_Software_for_Linux')
makedepends=('wget')

DLAGENTS='https::/usr/bin/wget --referer https://www.amd.com/en/support/kb/release-notes/rn-amdgpu-unified-linux-20-30 -N %u'

source=(https://drivers.amd.com/drivers/linux/amdgpu-pro-${major}-${minor}-ubuntu-${ubuntu_ver}.tar.xz)
sha256sums=(57f92e29e273ee51893bed57b473a5f781033761ad2a6796cb3e6808a123151f)

PKGEXT=".pkg.tar"


# extracts a debian package
# $1: deb file to extract
extract_deb() {
    local tmpdir="$(basename "${1%.deb}")"
    rm -Rf "$tmpdir"
    mkdir "$tmpdir"
    cd "$tmpdir"
    ar x "$1"
    tar -C "${pkgdir}" -xf data.tar.xz
}
# move ubuntu specific /usr/lib/x86_64-linux-gnu to /usr/lib
# $1: debian package library dir (goes from opt/amdgpu or opt/amdgpu-pro and from x86_64 or i386)
# $2: arch package library dir (goes to usr/lib or usr/lib32)
move_libdir() {
    local deb_libdir="$1"
    local arch_libdir="$2"

    if [ -d "${pkgdir}/${deb_libdir}" ]; then
        if [ ! -d "${pkgdir}/${arch_libdir}" ]; then
            mkdir -p "${pkgdir}/${arch_libdir}"
        fi
        mv -t "${pkgdir}/${arch_libdir}/" "${pkgdir}/${deb_libdir}"/*
        find ${pkgdir} -type d -empty -delete
    fi
}
# move copyright file to proper place and remove debian changelog
move_copyright() {
    find ${pkgdir}/usr/share/doc -name "changelog.Debian.gz" -delete
    mkdir -p ${pkgdir}/usr/share/licenses/${pkgname}
    find ${pkgdir}/usr/share/doc -name "copyright" -exec mv {} ${pkgdir}/usr/share/licenses/${pkgname} \;
    find ${pkgdir}/usr/share/doc -type d -empty -delete
}

package_amdgpu-core-meta () {
    pkgdesc="Config file /etc/ld.so.conf.d/20-amdgpu.conf"
    license=('MIT')
    install=amdgpu-core-meta.install
    arch=('any')

    extract_deb "${srcdir}"/amdgpu-pro-${major}-${minor}-ubuntu-${ubuntu_ver}/amdgpu-core_${major}-${minor}_all.deb
    move_copyright
}

package_amdgpu-pro-core-meta () {
    pkgdesc="Config file /etc/ld.so.conf.d/10-amdgpu-pro.conf"
    license=('custom: AMDGPU-PRO EULA')
    install=amdgpu-pro-core-meta.install
    arch=('any')
    depends=("amdgpu-core-meta=${major}_${minor}-${pkgrel}")

    extract_deb "${srcdir}"/amdgpu-pro-${major}-${minor}-ubuntu-${ubuntu_ver}/amdgpu-pro-core_${major}-${minor}_all.deb
    move_copyright
}

package_amf-amdgpu-pro () {
    pkgdesc="AMDGPU Pro Advanced Multimedia Framework"
    license=('custom: AMDGPU-PRO EULA')
    depends=("amdgpu-pro-core-meta=${major}_${minor}-${pkgrel}" "libglvnd" "libx11" "opencl-amdgpu-pro-orca=${major}_${minor}-${pkgrel}" "opencl-amdgpu-pro-pal=${major}_${minor}-${pkgrel}" "vulkan-amdgpu-pro=${major}_${minor}-${pkgrel}")

    extract_deb "${srcdir}"/amdgpu-pro-${major}-${minor}-ubuntu-${ubuntu_ver}/amf-amdgpu-pro_${major}-${minor}_amd64.deb
    move_copyright
}

package_hip-amdgpu-pro () {
    pkgdesc="HIP-CLANG runtime. HIP-CLANG allows developers to convert CUDA code to common C++"
    license=('custom: AMDGPU-PRO EULA')
    depends=("amdgpu-pro-core-meta=${major}_${minor}-${pkgrel}")

    extract_deb "${srcdir}"/amdgpu-pro-${major}-${minor}-ubuntu-${ubuntu_ver}/hip-amdgpu-pro_${major}-${minor}_amd64.deb
    move_copyright
}

package_amdgpu-pro-libgl () {
    pkgdesc="AMDGPU Pro OpenGL driver"
    license=('custom: AMDGPU-PRO EULA')
    provides=('libgl')
    depends=("amdgpu-pro-core-meta=${major}_${minor}-${pkgrel}" "libdrm" "libx11" "libxcb" "libxdamage" "libxext" "libxfixes" "libxxf86vm" "wayland")
    backup=(etc/amd/amdapfxx.blb)

    extract_deb "${srcdir}"/amdgpu-pro-${major}-${minor}-ubuntu-${ubuntu_ver}/libegl1-amdgpu-pro_${major}-${minor}_amd64.deb
    extract_deb "${srcdir}"/amdgpu-pro-${major}-${minor}-ubuntu-${ubuntu_ver}/libgl1-amdgpu-pro-appprofiles_${major}-${minor}_all.deb
    extract_deb "${srcdir}"/amdgpu-pro-${major}-${minor}-ubuntu-${ubuntu_ver}/libgl1-amdgpu-pro-dri_${major}-${minor}_amd64.deb
    extract_deb "${srcdir}"/amdgpu-pro-${major}-${minor}-ubuntu-${ubuntu_ver}/libgl1-amdgpu-pro-ext_${major}-${minor}_amd64.deb
    extract_deb "${srcdir}"/amdgpu-pro-${major}-${minor}-ubuntu-${ubuntu_ver}/libgl1-amdgpu-pro-glx_${major}-${minor}_amd64.deb
    extract_deb "${srcdir}"/amdgpu-pro-${major}-${minor}-ubuntu-${ubuntu_ver}/libglapi1-amdgpu-pro_${major}-${minor}_amd64.deb
    extract_deb "${srcdir}"/amdgpu-pro-${major}-${minor}-ubuntu-${ubuntu_ver}/libgles2-amdgpu-pro_${major}-${minor}_amd64.deb
    move_copyright
}

package_lib32-amdgpu-pro-libgl () {
    pkgdesc="AMDGPU Pro OpenGL driver (32-bit)"
    license=('custom: AMDGPU-PRO EULA')
    provides=('lib32-libgl')
    depends=("amdgpu-pro-core-meta=${major}_${minor}-${pkgrel}" "amdgpu-pro-libgl=${major}_${minor}-${pkgrel}" "lib32-libdrm" "lib32-libx11" "lib32-libxcb" "lib32-libxdamage" "lib32-libxext" "lib32-libxfixes" "lib32-libxxf86vm" "lib32-wayland")
    backup=(etc/amd/amdrc etc/ld.so.conf.d/10-amdgpu-pro-i386.conf)

    extract_deb "${srcdir}"/amdgpu-pro-${major}-${minor}-ubuntu-${ubuntu_ver}/libegl1-amdgpu-pro_${major}-${minor}_i386.deb
    extract_deb "${srcdir}"/amdgpu-pro-${major}-${minor}-ubuntu-${ubuntu_ver}/libgl1-amdgpu-pro-dri_${major}-${minor}_i386.deb
    extract_deb "${srcdir}"/amdgpu-pro-${major}-${minor}-ubuntu-${ubuntu_ver}/libgl1-amdgpu-pro-ext_${major}-${minor}_i386.deb
    extract_deb "${srcdir}"/amdgpu-pro-${major}-${minor}-ubuntu-${ubuntu_ver}/libgl1-amdgpu-pro-glx_${major}-${minor}_i386.deb
    extract_deb "${srcdir}"/amdgpu-pro-${major}-${minor}-ubuntu-${ubuntu_ver}/libglapi1-amdgpu-pro_${major}-${minor}_i386.deb
    extract_deb "${srcdir}"/amdgpu-pro-${major}-${minor}-ubuntu-${ubuntu_ver}/libgles2-amdgpu-pro_${major}-${minor}_i386.deb
    move_copyright

    # extra_commands:
    rm "${pkgdir}"/etc/amd/amdrc "${pkgdir}"/opt/amdgpu-pro/lib/xorg/modules/extensions/libglx.so "${pkgdir}"/opt/amdgpu/share/drirc.d/10-amdgpu-pro.conf
}

package_opencl-amdgpu-pro-comgr () {
    pkgdesc="Code object manager (COMGR)"
    license=('custom: AMDGPU-PRO EULA')
    depends=("amdgpu-pro-core-meta=${major}_${minor}-${pkgrel}")

    extract_deb "${srcdir}"/amdgpu-pro-${major}-${minor}-ubuntu-${ubuntu_ver}/opencl-amdgpu-pro-comgr_${major}-${minor}_amd64.deb
    move_copyright
}

package_opencl-amdgpu-pro-dev () {
    pkgdesc="AMD OpenCL SDK"
    license=('custom: AMDGPU-PRO EULA')
    depends=("opencl-amdgpu-pro-comgr=${major}_${minor}-${pkgrel}")

    extract_deb "${srcdir}"/amdgpu-pro-${major}-${minor}-ubuntu-${ubuntu_ver}/opencl-amdgpu-pro-dev_${major}-${minor}_amd64.deb
    move_copyright
}

package_opencl-amdgpu-pro-pal () {
    pkgdesc="AMDGPU Pro OpenCL driver PAL"
    license=('custom: AMDGPU-PRO EULA')
    provides=('opencl-driver')
    depends=("amdgpu-pro-core-meta=${major}_${minor}-${pkgrel}" "opencl-amdgpu-pro-comgr=${major}_${minor}-${pkgrel}")
    backup=(etc/OpenCL/vendors/amdocl64.icd)

    extract_deb "${srcdir}"/amdgpu-pro-${major}-${minor}-ubuntu-${ubuntu_ver}/opencl-amdgpu-pro-icd_${major}-${minor}_amd64.deb
    move_copyright
}

package_opencl-amdgpu-pro-orca () {
    pkgdesc="AMDGPU Pro OpenCL driver ORCA aka legacy"
    license=('custom: AMDGPU-PRO EULA')
    provides=('opencl-driver')
    depends=("amdgpu-pro-core-meta=${major}_${minor}-${pkgrel}")
    backup=(etc/OpenCL/vendors/amdocl-orca64.icd)

    extract_deb "${srcdir}"/amdgpu-pro-${major}-${minor}-ubuntu-${ubuntu_ver}/opencl-orca-amdgpu-pro-icd_${major}-${minor}_amd64.deb
    move_copyright
}

package_lib32-opencl-amdgpu-pro-orca () {
    pkgdesc="AMDGPU Pro OpenCL driver ORCA aka legacy (32-bit)"
    license=('custom: AMDGPU-PRO EULA')
    provides=('lib32-opencl-driver')
    depends=("amdgpu-pro-core-meta=${major}_${minor}-${pkgrel}")
    backup=(etc/OpenCL/vendors/amdocl-orca32.icd)

    extract_deb "${srcdir}"/amdgpu-pro-${major}-${minor}-ubuntu-${ubuntu_ver}/opencl-orca-amdgpu-pro-icd_${major}-${minor}_i386.deb
    move_copyright
}

package_vulkan-amdgpu-pro () {
    pkgdesc="AMDGPU Pro Vulkan driver"
    license=('custom: AMDGPU-PRO EULA')
    provides=('vulkan-driver')
    depends=("amdgpu-pro-core-meta=${major}_${minor}-${pkgrel}" "wayland")

    extract_deb "${srcdir}"/amdgpu-pro-${major}-${minor}-ubuntu-${ubuntu_ver}/vulkan-amdgpu-pro_${major}-${minor}_amd64.deb
    move_copyright

    # extra_commands:
    mkdir -p "${pkgdir}"/usr/share/vulkan/icd.d/
    mv "${pkgdir}"/opt/amdgpu-pro/etc/vulkan/icd.d/amd_icd64.json "${pkgdir}"/usr/share/vulkan/icd.d/amd_pro_icd64.json
    rm -rf "${pkgdir}"/opt/amdgpu-pro/etc/
}

package_lib32-vulkan-amdgpu-pro () {
    pkgdesc="AMDGPU Pro Vulkan driver (32-bit)"
    license=('custom: AMDGPU-PRO EULA')
    provides=('lib32-vulkan-driver')
    depends=("amdgpu-pro-core-meta=${major}_${minor}-${pkgrel}" "lib32-wayland")

    extract_deb "${srcdir}"/amdgpu-pro-${major}-${minor}-ubuntu-${ubuntu_ver}/vulkan-amdgpu-pro_${major}-${minor}_i386.deb
    move_copyright

    # extra_commands:
    mkdir -p "${pkgdir}"/usr/share/vulkan/icd.d/
    mv "${pkgdir}"/opt/amdgpu-pro/etc/vulkan/icd.d/amd_icd32.json "${pkgdir}"/usr/share/vulkan/icd.d/amd_pro_icd32.json
    rm -rf "${pkgdir}"/opt/amdgpu-pro/etc/
}

