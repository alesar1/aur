# Maintainer: Llewelyn Trahaearn <WoefulDerelict [at] GMail [dot] com>
# Contributor: Tobias Powalowski <tpowa [at] archlinux [dot] org>
# Contributor: Ronald van Haren <ronald [at] archlinux [dot] org>
# Contributor: Keshav Amburay <(the ddoott ridikulus ddoott rat) (aatt) (gemmaeiil) (ddoott) (ccoomm)>

## "1" to enable IA32-EFI build in Arch x86_64, "0" to disable
_ia32_efi_in_arch_x64="1"

## "1" to enable EMU build, "0" to disable
_grub_emu_build="1"

[[ "${CARCH}" == "x86_64" ]] && _target_arch="x86_64"
[[ "${CARCH}" == "i686" ]] && _target_arch="i386"

_build_platforms="i386-pc ${_target_arch}-efi"
[[ "${CARCH}" == "x86_64" ]] && [[ "${_ia32_efi_in_arch_x64}" == "1" ]] && _build_platforms+=" i386-efi"
[[ "${_grub_emu_build}" == "1" ]] && _build_platforms+=" ${_target_arch}-emu"

pkgname="grub-git"
pkgver=2.02.r241.ged087f046
pkgrel=1
pkgdesc="GNU GRand Unified Bootloader (2)"
arch=('x86_64' 'i686')
url="https://www.gnu.org/software/grub/"
license=('GPL3')
depends=('device-mapper' 'freetype2' 'fuse2' 'gettext')
makedepends=('autogen' 'bdf-unifont' 'git' 'help2man'
             'python' 'rsync' 'texinfo' 'ttf-dejavu')
optdepends=('dosfstools: For grub-mkrescue FAT FS and EFI support'
            'efibootmgr: For grub-install EFI support'
            'libisoburn: Provides xorriso for generating grub rescue iso using grub-mkrescue'
            'mtools: For grub-mkrescue FAT FS support'
            'os-prober: To detect other OSes when generating grub.cfg in BIOS systems')

if [[ "${_grub_emu_build}" == "1" ]]; then
    depends+=('sdl')
    makedepends+=('libusb')
    optdepends+=('libusb: For grub-emu USB support')
fi

provides=("${pkgname%-*}")
conflicts=("${pkgname%-*}")
backup=('etc/default/grub'
        'etc/grub.d/40_custom')
install="${pkgname}.install"
source=("grub::git://git.savannah.gnu.org/grub.git"
        "grub-extras::git://git.savannah.gnu.org/grub-extras.git"
        '10_linux-detect-archlinux-initramfs.patch'
        'add-GRUB_COLOR_variables.patch'
        'grub.default')
sha256sums=('SKIP'
            'SKIP'
            'b41e4438319136b5e74e0abdfcb64ae115393e4e15207490272c425f54026dd3'
            'a5198267ceb04dceb6d2ea7800281a42b3f91fd02da55d2cc9ea20d47273ca29'
            '74e5dd2090a153c10a7b9599b73bb09e70fddc6a019dd41641b0f10b9d773d82')
 
prepare() {
    cd grub

    # Patch grub-mkconfig to detect Arch Linux initramfs images.
    patch -Np1 -i "$srcdir"/10_linux-detect-archlinux-initramfs.patch

    # Patch to enable GRUB_COLOR_* variables in grub-mkconfig.
    # Based on http://lists.gnu.org/archive/html/grub-devel/2012-02/msg00021.html
    patch -Np1 -i "$srcdir"/add-GRUB_COLOR_variables.patch

    # Fix DejaVuSans.ttf location so that grub-mkfont can create *.pf2 files for starfield theme.
    sed 's|/usr/share/fonts/dejavu|/usr/share/fonts/dejavu /usr/share/fonts/TTF|g' -i "configure.ac"

    # Modify grub-mkconfig behaviour to silence warnings FS#36275
    sed 's| ro | rw |g' -i "util/grub.d/10_linux.in"

    # Modify grub-mkconfig behaviour so automatically generated entries read 'Arch Linux' FS#33393
    sed 's|GNU/Linux|Linux|' -i "util/grub.d/10_linux.in"

    # Pull in latest language files
    ./linguas.sh
	
    # Remove lua module from grub-extras as it is incompatible with changes to grub_file_open   
    # http://git.savannah.gnu.org/cgit/grub.git/commit/?id=ca0a4f689a02c2c5a5e385f874aaaa38e151564e
    rm -rf "$srcdir"/grub-extras/lua
}

pkgver() {
    cd grub
    git describe --long --tags | sed 's/^grub.//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
    cd grub
    export GRUB_CONTRIB="$srcdir"/grub-extras
    ./autogen.sh

    # Undefined references to __stack_chk_fail
    CFLAGS=${CFLAGS/-fstack-protector-strong}

    # Undefined references to _GLOBAL_OFFSET_TABLE_
    CFLAGS=${CFLAGS/-fno-plt}
    
    for _arch in $_build_platforms; do
        mkdir "$srcdir"/grub/build_"$_arch"
        cd "$srcdir"/grub/build_"$_arch"

        # Explicitly set ac_cv_header_sys_sysmacros_h
        # https://savannah.gnu.org/bugs/index.php?55520
        ../configure --with-platform="${_arch##*-}" \
                --target="${_arch%%-*}"  \
                --prefix="/usr" \
                --sbindir="/usr/bin" \
                --sysconfdir="/etc" \
                --enable-boot-time \
                --enable-cache-stats \
                --enable-device-mapper \
                --enable-grub-mkfont \
                --enable-grub-mount \
                --enable-mm-debug \
                --enable-nls \
                --disable-silent-rules \
                --disable-werror \
                ac_cv_header_sys_sysmacros_h=yes
        make
    done
}

package() {
    cd grub

    for _arch in $_build_platforms; do
        cd "$srcdir"/grub/build_"$_arch"
        make DESTDIR="$pkgdir" bashcompletiondir=/usr/share/bash-completion/completions install
    done

	# Install /etc/default/grub (used by grub-mkconfig)
	install -D -m0644 "$srcdir"/grub.default "$pkgdir"/etc/default/grub
	
    # Tidy up
    find "$pkgdir"/usr/lib/grub \( -name '*.module' -o \
                                   -name '*.image' -o \
                                   -name 'kernel.exec' -o \
                                   -name 'gdb_grub' -o \
                                   -name 'gmodule.pl' \) -delete
}