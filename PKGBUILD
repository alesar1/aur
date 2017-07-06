# Maintainer: Chris Severance aur.severach aATt spamgourmet dott com

# Todo: rewrite dgrp_cfg_node to be systemd compatible.
# Todo: add systemd getty support to drpadmin
# Todo: Default user, group, and mode are in the backing store. These do not work. They are set by udev and apply to all ports.
# Digi bug: terminal freezes when viewing /proc/dgrp/mon
# Digi bug: drpd terminates after the first tty open when launched from dgrp_cfg_node. It stays working when launched by systemd restart
# Digi bug: occasional Can't open serial /dev/ttyaf00: Resource temporarily unavailable for PortServer TS (not II)
# Digi bug: occasional dropped characters for PortServer II, PortServer TS, Digi One
# Digi bug: Digi RealPort Manager (java) is unable to add new Realport because it uses the wrong options
# Digi bug: mbrowse reports a few parsing errors in MIB
# Digi bug: make compatible with OpenSSL 1.1

# Digi Realport driver for Arch Linux. See Digi release notes for supported products.

# Build instructions: (Skip these first two sections)

# This only applies if you installed a long time ago when this driver would still
# compile and haven't upgraded in a while. Now this can't be built on Arch without a
# patch so new users skip to the next section.

# This PKGBUILD does not clean up the slop from the Digi supplied make.
# If you have already installed according to the the instructions
# log on as root and go through the process in reverse from the original
# unmodified Digi tgz. You won't lose your configuration.
# make preuninstall; make uninstall
# To clean up you may want to remove the folders /share/ and /etc/init.d/
# Arch Linux does not use these folders though they may have spurious files from
# other misdirected installs.

# The next section: ... Now onto the real install ...

# Edit PKGBUILD.local after the first run
if [ ! -s 'PKGBUILD.local' ]; then
  cat > 'PKGBUILD.local' << EOF
# Set the mode for all created devices.
_opt_defaultmode="0660" # default: 0600
_opt_defaultgroup="uucp" # default: root
# If you need more granular control.
# See http://knowledge.digi.com/articles/Knowledge_Base_Article/HOW-TO-Preserve-device-permissions-settings-with-RealPort-in-Linux/
# Once set copy /etc/udev/rules.d/10-dgrp.rules to the PKGBUILD folder
# and it will be made into the package.

# Digi's product name is inconsistent. Here you can choose. RealPort seems the most popular.
_opt_RealPort='RealPort' # Can also be Realport

_opt_DKMS=1           # This can be toggled between installs
EOF
fi
source 'PKGBUILD.local'

# Since the kernel module isn't loaded until you have a device
# configured, these services are automatically enabled and started
# for immediate hardware support. They will be reenabled each time the
# package is installed or upgraded.
# systemctl enable dgrp_daemon.service
# systemctl start dgrp_daemon.service
# systemctl enable dgrp_ditty.service
# systemctl start dgrp_ditty.service

# To stop these services from loading:
# systemctl disable dgrp_daemon.service
# systemctl stop dgrp_daemon.service
# systemctl disable dgrp_ditty.service
# systemctl stop dgrp_ditty.service

# To get started using your Digi products:
# man -Ik "Digi "
# man dgrp_gui
# man dgrp_cfg_node
# man ditty
# man drpadmin

# The man page for dgrp_cfg_node lacks some detail. See this page for more info
# ftp://digiftp.digi.com/support_archive/support/manuals/psts/rp-linux-conf-managing-portservers-with-dgrp-config-node.html

# To get your equipment up faster on servers that don't have X installed
# I've supplied a console shell script "drpadmin".
# It is adapted from Digi's RealPort "drpadmin" for Sun, HP UX, and SCO and has the same
# look and feel.

# Show available Digi devices
#   addp.pl -Q

# For information about using dgrp_ditty.service to maintain your ditty settings
# across reboots see http://knowledge.digi.com/articles/Knowledge_Base_Article/How-do-I-configure-my-ditty-rp-port-settings-to-stay-after-rebooting-when-using-RealPort-in-Linux/

# UnInstall cleanup:
# rm /etc/dgrp.backing.store* /usr/bin/dgrp/config/ditty.commands
# rmdir /usr/bin/dgrp/config
# rmdir /usr/bin/dgrp

set -u
pkgname='dgrp'
pkgver='1.9.37'
pkgrel='1'
pkgdesc="tty driver for Digi ${_opt_RealPort} ConnectPort EtherLite Flex One CM PortServer TS IBM RAN serial console terminal servers"
#_pkgdescshort="Digi ${_opt_RealPort} driver for Ethernet serial servers" # For when we used to generate the autorebuild from here
arch=('i686' 'x86_64')
url='https://www.digi.com/'
license=('GPL' 'custom') # OpenSSL=Apache. Arch is always new enough to not need their version.
depends=('openssl-1.0' 'grep' 'awk' 'systemd' 'procps-ng' 'psmisc' 'perl')
optdepends=(
  {tk,gksu}': Digi RealPort Manager GUI'
  'java-runtime: Digi Device Discovery Tool GUI'
  'mbrowse: SNMP browser GUI'
)
backup=('etc/dgrp.backing.store')
options=('!docs' '!emptydirs')
install="${pkgname}-install.sh"
_verwatch=('https://www.digi.com/support/includes/drivers.aspx?pid=1954&osvid=218' '<li>.*RealPort Driver for Linux ver\. \([0-9\.]\+\), tgz version.*' 'f')
_mibs=(
  '40002014_a.mib' # DIGI Connectware Manager Notifications
  '40002194_H.mib' # Portserver TS MIB File
  '40002195_P.mib' # Digi Structures of Management (SMI) MIB
  '40002236_b.mib' # Digi MODBUS MIB
  '40002237_c.mib' # Digi Power Supply MIB
  '40002238_b.mib' # Digi Multi-Electrical Interface (MEI) MIB
  '40002239_B.mib' # Digi Socket ID MIB File
  '40002240_B.mib' # Portserver TS Port Buffering MIB File
  '40002257_B.mib' # Digi IA MIB
  '40002258_B.mib' # Digi UDP Serial MIB
  '40002335_B.mib' # Portserver TS Secure Access MIB File
  '40002336_C.mib' # Digi Power Management MIB File
  '40002337_D.mib' # Digi Power Management Traps MIB
  '40002338_D.mib' # Digi Keyword Notification MIB
  '40002339_D.mib' # Digi Login Traps MIB
  '40002410_a.mib' # DIGI Connect Device Info Management Information Base
  '40002411_a.mib' # Digi Connect Serial Alarm Traps MIB
  '40002478_B.mib' # Digi NFS TRAPS MIB
  '40002479_F.mib' # CM Management Information Base
  '40002514_a.mib' # Digi Connectware Manager Notifications MIB
  '40002515_a.mib' # Digi Connect Device Identity MIB
  '40002520_a.mib' # Digi Power Traps MIB
  '40002709_C.mib' # Digi ConnectPort LTS MIB
  'rfc1316.mib' # Portserver II RFC1316-MIB Definitions
  'rfc1317.mib' # Portserver II RFC1317-MIB Definitions
)
# Let me know if these dnw (do not want) items are actually serial device servers and should be installed.
_mibsdnw=(
  '40002325_D.mib' # DIGI Wireless Lan Management Information Base
  '40002370_C.mib' # DIGI Serial Traps Management Information Base
  '40002436_B.mib' # DIGI Modem Test Traps Management Information Base
  '40002477_B.mib' # Management Information Base
  '40002519_F.mib' # Passport Management Information Base
  '40002521_a.mib' # DIGI IPMI Notification Feature Management Information Base
  '40002593_B.mib' # DIGI Connect Mobile Information Management Information Base
  '40002594_a.mib' # DIGI Mobile Traps Management Information Base
  '40002782_a.mib' # Passport Management Information Base
  '40002846_A.mib' # DIGI Connect Mobile Status Management Information Base
)
_mibsrc='http://ftp1.digi.com/support/utilities/'
_filever="${pkgver//\./-}"
_filever="${_filever/-/.}"
source=(
  #"${pkgname}-${pkgver}-81000137_X.tgz::http://ftp1.digi.com/support/driver/81000137_X.tgz"
  "${pkgname}-${pkgver}-beta.tgz::ftp://ftp1.digi.com/support/driver/RealPort%20Linux%20Beta%20Driver/dgrp-${_filever}_y1p.tgz.rpm"
  'drpadmin' 'drpadmin.1' # "autorebuild-${pkgname}.sh"
  'addp_perl-1.0.tgz::https://github.com/severach/addp/archive/f92a6fd2050c9f32a5a11cac18cd9def78138530.tar.gz'
  'ftp://ftp1.digi.com/support/utilities/AddpClient.zip'
  'dgrp-patch-signal_pending-kernel-4-11.patch'
  "${_mibs[@]/#/${_mibsrc}}"
)
unset _mibsrc
#source_i686=('http://ftp1.digi.com/support/utilities/40002890_A.tgz')
#source_x86_64=('http://ftp1.digi.com/support/utilities/40002889_A.tgz') # compiled i686 therefore worthless
# addp and sddp are incomplete. I replaced them with addp.pl
sha256sums=('05bcb03f9da28ef45a684d566c0d12694e7a2cb133a43d4c9ed2a71c84df3201'
            '42898b9d24262de27e9b1f3067d51d01373810b7c9e4991403a7f0a5dd7a26cf'
            '66f8b106a052b4807513ace92978e5e6347cef08eee39e4b4ae31c60284cc0a3'
            '9d79df8617e2bb1042a4b7d34311e73dc4afcdfe4dfa66703455ff54512427f5'
            '00d7b452a4f16599f7162f512a05599614115554992b872fc5302b521ea04468'
            '83c90a2a9518fde5f500f336a181e86662b62065929bedd60fbd380dc2f4a9da'
            '4b54148008b02a2544d8b33f07c471a068b0973ac5402967af8bf73a28b6a8b6'
            'a1833d877b07b0f424676241b3e1070e116d07965db3131a61a3b6ce0ff90063'
            '6fca5df11304d905f561a0c251419619960a8da8e724d36b34e9977e97f02528'
            '2dd7868acf66c14d67012a2263088b08d8f9320c64b64db94740fae54b485c78'
            '26159071b1b0df2af04d612e32ce72c8835f241c56b9fa2dadee53d9d127d0b7'
            'f686011f7db06f0632f6460566da751a00fccd04bb1527b8a83239aad46d4de5'
            '50130240e3ce85759aa99b3a268568de6a97084eeb40a92ef0b4937333808d8a'
            'f4a89790ad1413ecfc2b723a45fa0d0b93ae01cc433d930db4e689f82d0367fd'
            '3e2881ebf6866751a64e7cf948b85a3c2053f2d0a8799234c56b732cde17b853'
            'c54576fad5ccedfd50cebc22a6dd45bd8c4deb875282f5c7d1a89a33426c1746'
            '08eecc0e5d8f9fffe0fcf3b9f47e56c81bd713964bd7aeb0f4b6a6de3e0f3592'
            '75ba60917769c2cc2324050b74a4e618f0904464ece15646045fd931001c47e4'
            '43e7f12bb32343254f472260fd26566e8aab58764ba3e73d500542e462f27ac5'
            '241ef4a96b4d34652bfc7a9ce0bab317129e0123f05c68713a45d88624ddd19b'
            '21b8d7c50cacc418611b909159ed6258dc13026e8e55034e86965227b8176509'
            '471f1342398c4fce86e1d437c4f6053be75ae3a99337613d39c05e4e3c80ede9'
            '06a81a5dfaa1c61944d1a12d2efc8129c0ee72f630817f844879bd17d6cb4d80'
            'a3286df00ca3566361faf1f128752c56d046558277cd90025831f9840129e33f'
            '33b29ee72b590ecadd54e893317a279bb49a2dd4a189fd386491e1a67ef193a8'
            '4011005db626db67b50f13b6242db1fed0d11b0d89e56af7ae39f5719d7cd323'
            '679b081c31e5fc156ad9c55afc0bba9ec354f37e28eeeb453bcbd6b1cf68988e'
            '731e05fc551367faa6ad5dc317eedf305388ab12db196c0a1361a3d01bd35279'
            'c471cafa43503a40d43b42acd8bc6ef49db29e55a74e0494c85f729ea45fe243'
            '5cac7ce2e6f043127f314b93694af021ae7820ffb5bf3de343da7a240d05e9c8'
            '8654496d83c083e457e8bb9bae2b1e71804d156a38c284d89872d0125eba947d')

if [ "${_opt_DKMS}" -ne 0 ]; then
  depends+=('linux' 'dkms' 'linux-headers')
else
  makedepends+=('linux-headers')
fi

# Check for updates and case errors to the 2 mib lists
_fn_mibcheck() {
  echo 'Checking for newer and misnamed MIB'
  local line
  local linea
  local file='/tmp/PKGBUILD.mibs'
  # Get list of files
  while IFS='' read -r line || [[ -n "${line}" ]]; do
    read -r -a linea <<<"${line}"
    line="${linea[8]}" # filename
    case "${line}" in
    4000*.mib)
      echo "${line}" >> "${file}"
      ;;
    esac
  done < <(curl -s 'ftp://ftp1.digi.com/support/utilities/') # curl is sorted and case insensitive because Digi runs WSFTP. We can't assume this will be always so.
  # get list of latest files
  local lineu linep lineup
  lineup=''
  linep=''
  linea=()
  while IFS='' read -r line || [[ -n "${line}" ]]; do
    lineu="${line^^}"
    if [ "${lineup%%_*}" != "${lineu%%_*}" ] && [ ! -z "${linep}" ]; then
      linea+=("${linep}")
    fi
    lineup="${lineu}"
    linep="${line}"
  done < <(sort -f "${file}")
  rm -f "${file}"
      linea+=("${linep}")
  # Check against _mibs
  local found mib mibu
  for line in "${linea[@]}"; do
    lineu="${line^^}"
    found=0
    for mib in "${_mibs[@]}" "${_mibsdnw[@]}"; do
      mibu="${mib^^}"
      if [ "${lineu%%_*}" = "${mibu%%_*}" ]; then
        if [ "${lineu}" != "${mibu}" ]; then
          echo "${mib} has been updated to ${line}"
        elif [ "${line}" != "${mib}" ]; then
          echo "Case correction: ${mib} -> ${line}"
        fi
        found=1
        break
      fi
    done
    if [ "${found}" -eq 0 ]; then
      echo "${line} is missing"
    fi
  done
  return 1
}
#_fn_mibcheck
# bash -c 'source PKGBUILD; _fn_mibcheck'

prepare() {
  set -u
  cd dgrp-*/

  # diff -pNaru5 src.old/dgrp-1.9 src/dgrp-1.9 > 'dgrp-patch-signal_pending-kernel-4-11.patch'
  patch -Nbup2 < '../dgrp-patch-signal_pending-kernel-4-11.patch'

  rm -f daemon/openssl-*.tar.gz # I don't want their version to build if OpenSSL version detection fails in the future

  # Standardize name of RealPort
  sed -e "s/RealPort/${_opt_RealPort}/gI" -i $(grep -lrF $'RealPort\nRealport' .)
  # grep -ri realport . | grep -vF $'RealPort\nRealport'
  sed -e '# Cosmetic fix for newer gcc compilers' \
      -e 's:\(3.9\*|4.\*\))$:\1|5.*|6.*|7.*):g' \
      -e "# I can't find any other way to fix the modules dir" \
      -e 's:/lib/modules/:/usr&:g' \
      -e '# Kill a harmless mkdir error. They mkdir the folder then dont use it.' \
      -e 's@^\(\s\+\)\(mkdir -p /usr/lib/modules/${osrel}/misc\)$@\1: #\2@g' \
    -i 'configure'
  # Eradicate sbin before we even get started
  sed -e 's:/usr/sbin:/usr/bin:g' -e 's:/sbin/:/usr/bin/:g' -i 'configure' Makefile* */Makefile scripts/{preun,post}install
  # Fix the installers. We do in PKBGUILD what we can and the just a little in install.
  # cp -p 'scripts/postinstall' 'scripts/postinstall.Arch' # DEBUG for comparison
  sed -e '# Some security for root' \
      -e 's:^#!\s*/bin/sh$:&\nif [ "${EUID}" -ne 0 ]; then\n  echo "Must be root!"\n  exit 1\nfi:g' \
      -e '# Remove Install noise' \
      -e 's:^\(\s*\)\(echo "Running\):\1#\2:g' \
      -e '# Block the usage of chkconfig' \
      -e 's:/usr/bin/chkconfig:/usr/bin/true:g' \
      -e '# Remove noise for defunct chkconfig' \
      -e 's:^\(\s\+\)\(echo "Added\):\1#\2:g' \
      -e '# Automatically bring back pacsave file on reinstall' \
      -e 's:^if \[ -f /etc/dgrp:if [ -s "/etc/dgrp.backing.store.pacsave" -a ! -s "/etc/dgrp.backing.store" ]; then\n  mv "/etc/dgrp.backing.store.pacsave" "/etc/dgrp.backing.store"\nfi\n&:g' \
      -e '# No need to upgrade and back up a blank file' \
      -e 's:-f \(/etc/dgrp.backing.store\):-s \1:g' \
      -e '# Why depend on /tmp when we can use the /etc folder which is where admin will be looking to fix their non working hardware' \
      -e 's:/tmp/dgrp/dgrp.backing.store:/etc/dgrp.backing.store:g' \
      -e '# The rest is done in package.' \
      -e 's:^echo "Checking:exit 0\n&:g' \
      -e '# Prepare the links for package to use them' \
      -e 's:^\(\s\+\)ln -s /usr/bin/\([^ ]\+\) \(.\+\)$:\1ln -sf "\2" "${_DESTDIR}\3":g' \
      -e "# All that's left is config conversion" \
    -i 'scripts/postinstall'
  #cp -p 'scripts/preuninstall' 'scripts/preuninstall.Arch' # For comparison
  sed -e '# Some security for root' \
      -e 's:^#!\s*/bin/sh$:&\nif [ "${EUID}" -ne 0 ]; then\n  echo "Must be root!"\n  exit 1\nfi:g' \
      -e '# Remove UnInstall noise' \
      -e 's:^\(\s*\)\(echo "Running\):\1#\2:g' \
      -e '# Block the usage of chkconfig' \
      -e 's:/usr/bin/chkconfig:/usr/bin/true:g' \
      -e '# Remove more noise' \
      -e 's:^\(\s\+\)\(echo "Removed\):\1#\2:g' \
      -e '# No need to sleep. The daemons are shut down by systemd' \
      -e 's:^sleep :#&:g' \
      -e '# pacman handles the links and files' \
      -e 's;if \[ -L ;if ! : \&\& [ -L ;g' \
      -e 's;^\(\s*\)\(rm -f \);\1: #\2;g' \
      -e '# Fixing this file was almost useless. All it does after we disable everything is an rmmod' \
    -i 'scripts/preuninstall'
  test ! -f 'scripts/postinstall.Arch' -a ! -f 'scripts/preuninstall.Arch'

  # Change insmod to modprobe
  sed -e 's:\${INSMOD}.*$:modprobe "${DGRP_DRIVER}" # &:g' -i 'config/dgrp_cfg_node'

  # drpd makefile does not honor --with-ssl-dir. We convert the bogus folder to the one we need.
  sed -e 's:/usr/local/ssl/include:/usr/include/openssl-1.0:g' \
      -e 's:/usr/local/ssl/lib:/usr/lib/openssl-1.0:g' \
    -i 'daemon/Makefile.in'

  # this generates a harmless error as it tries to make a folder in /usr/lib/modules...
  # --with-ssl-dir supplies to -I but mainly for configure. CFLAGS goes everywhere.
  # --with-ssl-dir is supplied to -L too which is worthless. We amend with LDFLAGS.
  CFLAGS="${CFLAGS} -I/usr/include/openssl-1.0" \
  LDFLAGS="${LDFLAGS} -L/usr/lib/openssl-1.0" \
  ./configure -q --sbindir='/usr/bin' --prefix='/usr' --mandir='/usr/share/man' --with-ssl-dir='/usr/include/openssl-1.0'

  # Produce a "file_locations" that we can pull in here.
  #if [ ! -f 'config/file_locations.Arch' ]; then
  #  echo "# for ${pkgname}-${pkgver} PKGBUILD from Arch Linux AUR" > 'config/file_locations.Arch'
  #  sed -e 's/^DGRP/local _&/g' 'config/file_locations' >> 'config/file_locations.Arch'
  #fi
  #. 'config/file_locations.Arch'

  # Patch a source for a constant that has been removed from the kernel.
  # Digi should patch this constant away since whatever it does will eventually not work.
  # See https://lkml.org/lkml/2014/10/16/632  [PATCH -next 09/27] tty: Remove TTY_CLOSING - LKML.ORG
  # See http://lkml.iu.edu/hypermail/linux/kernel/1411.0/03202.html [PATCH -next v2 09/26] tty: Remove TTY_CLOSING
  if [ "$(vercmp "${pkgver}" '1.9.36')" -le 0 ]; then
    cat >> 'driver/build/include/dgrp_net_ops.h' << EOF
/* patched by ${pkgname}-${pkgver} PKGBUILD from Arch Linux AUR */
/* https://aur.archlinux.org/ */
#ifndef TTY_CLOSING
#define TTY_CLOSING (7)
#endif
EOF
  fi

  # Fix some warnings
  echo 'int next_baud(int dir);' >> 'dinc/dinc.h'
  sed -e 's:^exeunt(int code).*:int &:g' -i 'dgipserv/dgipserv.c'
  sed -e 's:^getcode(dest, src):int &:g' \
      -e 's:^stprint(str, len):int &:g' \
      -e 's:^#include <termio\.h>$:&\n#include <term.h>:g' \
    -i 'ditty/ditty.c'
  #sed -e 's:^CFLAGS = .*:& -Wno-unused-but-set-variable:g' -i 'ditty/Makefile'
  sed -e 's:static raw_mdm;:static int raw_mdm;:g' -i 'dinc/dinc_hw.c'
  sed -e 's:^CPPFLAGS = .*:& -Wno-unused-but-set-variable:g' -i 'Makefile'
  set +u
}

build() {
  set -u
  cd dgrp-*/
  #. 'config/file_locations.Arch'
  make -s all -j1 # This package doesn't support threaded make and it's too small to fix
  set +u
}

# Copy this line into the .install file
_daemons=('daemon' 'ditty')

package() {
  set -u
  if [ "${_opt_DKMS}" -eq 0 ]; then
    # I don't want Linux version info showing on AUR web. After a few months 'linux<0.0.0' makes it look like an out of date package.
    local _kernelversionsmall="$(uname -r)"
    _kernelversionsmall="${_kernelversionsmall%%-*}"
    _kernelversionsmall="${_kernelversionsmall%\.0}" # trim 4.0.0 -> 4.0, 4.1.0 -> 4.1
    # prevent the mksrcinfo bash emulator from getting these vars!
    eval 'conf''licts=("linux>${_kernelversionsmall}" "linux<${_kernelversionsmall}")'
    eval 'dep''ends+=("linux=${_kernelversionsmall}")'
  fi

  cd dgrp-*/
  #. 'config/file_locations.Arch'

  make -s -j1 RPM_BUILD_ROOT="${pkgdir}" install
  install -m644 'dinc/dinc.1' -t "${pkgdir}/usr/share/man/man1/" # They bypass the Makefile that does this
  chmod 644 "${pkgdir}/usr/bin/dgrp/config"/{dgrp.gif,file_locations}
  chmod 744 "${pkgdir}/usr/bin/"{dgelreset,dgipserv}
  # Create the links, customized for us by prepare above
  grep 'ln -sf ' 'scripts/postinstall' |\
  _DESTDIR="${pkgdir}" \
  sh -e -u -s --
  #rmdir "${pkgdir}/usr/share/doc" # makepkg does this for us

  # Install MIB
  local _mib
  for _mib in "${srcdir}"/*.mib; do
    install -Dpm0644 "${_mib}" "${pkgdir}/usr/share/snmp/mibs/digi-serial-server-${_mib##*/}.txt"
  done

  # Prepend our message on the udev rules file
  install -dm755 "${pkgdir}/etc/udev/rules.d/"
  touch "${pkgdir}/${backup[0]}" # postinstall handles the pacsave file automatically
  chmod 644 "${pkgdir}/${backup[0]}"
  sed -e 's:^KERNEL=="cu_dgrp:#&:g' -i "${pkgdir}/tmp/dgrp/10-dgrp.rules" # Recommended by Digi
  cat > "${pkgdir}/etc/udev/rules.d/10-dgrp.rules" << EOF
# Automatically generated by ${pkgname}-${pkgver} PKGBUILD from Arch Linux AUR
# https://aur.archlinux.org/

# Generated: $(date +"%F %T")
# From PKGBUILD in folder: $(pwd)

# Warning: If you modify this file you should copy it into the folder with the
# PKGBUILD or you might lose the customizations on the next install.

# This file was customized by the PKGBUILD by setting the mode on all ports
# to MODE=(see below). If all you need is a different mode on all ports
# then set the option in the PKGBUILD. If you need more granular control
# see these customization instructions:

# http://knowledge.digi.com/articles/Knowledge_Base_Article/HOW-TO-Preserve-device-permissions-settings-with-RealPort-in-Linux/

# Then copy this file into the folder with PKGBUILD.

$(cat "${pkgdir}/tmp/dgrp/10-dgrp.rules")
EOF
  rm -f "${pkgdir}/tmp/dgrp/10-dgrp.rules"
  rmdir "${pkgdir}/tmp/dgrp" "${pkgdir}/tmp" # crashes if other files ever show up in /tmp/dgrp
  if [ ! -z "${_opt_defaultmode:-}" ]; then
    sed -e 's:^\(KERNEL=="tty_dgrp\)\(.*\)$:\1\2, MODE="'"${_opt_defaultmode}"'", GROUP="'"${_opt_defaultgroup}"'":g' -i "${pkgdir}/etc/udev/rules.d/10-dgrp.rules"
  fi
  if [ -s "${srcdir}/../10-dgrp.rules" ]; then
    cp "${srcdir}/../10-dgrp.rules" "${pkgdir}/etc/udev/rules.d/10-dgrp.rules" # no cp -p in case this file has any wrong user:group
  fi
  chmod 644 "${pkgdir}/etc/udev/rules.d/10-dgrp.rules"

  install -Dpm755 "${pkgdir}/etc/init.d"/{dgrp_daemon,dgrp_ditty} -t "${pkgdir}/usr/bin/dgrp/daemon/"
  rm -f "${pkgdir}/etc/init.d"/{dgrp_daemon,dgrp_ditty}
  rmdir "${pkgdir}/etc/init.d"

  # systemd integration.
  #install -dm755 "${pkgdir}/usr/lib/systemd/system/"
  local _daemon
  for _daemon in "${_daemons[@]}"; do
    install -Dm644 <(cat << EOF
# Automatically generated by ${pkgname}-${pkgver} PKGBUILD from Arch Linux AUR
# https://aur.archlinux.org/
[Unit]
Description="Digi ${_opt_RealPort} ${_daemon}"
After=network.target

[Service]
Type=forking
ExecStart=/usr/bin/dgrp/daemon/dgrp_${_daemon} start
ExecStop=/usr/bin/dgrp/daemon/dgrp_${_daemon} stop
ExecReload=/usr/bin/dgrp/daemon/dgrp_${_daemon} reload

[Install]
WantedBy=multi-user.target
EOF
  ) "${pkgdir}/usr/lib/systemd/system/dgrp_${_daemon}.service"
  #chmod 644 "${pkgdir}/usr/lib/systemd/system/dgrp_${_daemon}.service"
done

  # Install my custom drpadmin with man page.
  install -Dm755 "${srcdir}/drpadmin" -t "${pkgdir}/usr/bin/"
  sed -e 's/^#distro=:::$/g_distro="Arch Linux"/g' \
      -e "s/RealPort/${_opt_RealPort}/gI" -i "${pkgdir}/usr/bin/drpadmin"
  install -Dm444 "${srcdir}/drpadmin.1" -t "${pkgdir}/usr/share/man/man1/"
  # Standardize name of RealPort in man pages
  sed -e "s/RealPort/${_opt_RealPort}/gI" -i "${pkgdir}/usr/share/man/man8/"*.8 "${pkgdir}/usr/share/man/man1/"*.1

  # Desktop file for config tool
  install -Dm644 <(cat << EOF
[Desktop Entry]
Name=Digi RealPort Manager
GenericName=Device Server Manager
Comment=Manage tty connections to Digi serial device servers
Exec=gksudo -k -u root dgrp_gui
Terminal=false
Type=Application
#Icon=
Categories=Application;Utility;
MimeType=application/x-executable
EOF
  ) "${pkgdir}/usr/share/applications/dgrp_cfg.desktop"

  # addp tui and gui utilities
  #install -Dpm755 "${srcdir}/addp" -t "${pkgdir}/usr/bin/"
  install -Dpm755 "${srcdir}"/addp-*/'/addp.pl' "${pkgdir}/usr/bin/"
  install -Dpm644 "${srcdir}/AddpClient.jar" -t "${pkgdir}/usr/bin/dgrp/"

  # Desktop file for config tool
  install -Dm644 <(cat << EOF
# Automatically generated by ${pkgname}-${pkgver} PKGBUILD from Arch Linux AUR
# https://aur.archlinux.org/

[Desktop Entry]
Name=Digi Device Discovery Tool
GenericName=Device Server Manager
Comment=Manage Digi serial device servers
Exec=java -jar /usr/bin/dgrp/AddpClient.jar
Terminal=false
Type=Application
#Icon=
Categories=Application;Utility;
MimeType=application/x-executable
EOF
  ) "${pkgdir}/usr/share/applications/AddpClient.desktop"

  # DKMS
  if [ "${_opt_DKMS}" -ne 0 ]; then
    rm -rf "${pkgdir}/usr/lib/modules/"
    local _dkms="${pkgdir}/usr/src/${pkgname}-${pkgver}"
    install -Dm644 <(cat << EOF
# Automatically generated by ${pkgname}-${pkgver} PKGBUILD from Arch Linux AUR
# https://aur.archlinux.org/

PACKAGE_NAME="${pkgname}"
PACKAGE_VERSION="${pkgver}"
AUTOINSTALL="yes"

BUILT_MODULE_NAME[0]="dgrp"
BUILT_MODULE_LOCATION[0]="driver/build"
# Using all processors doesn't compile this tiny module any faster.
MAKE[0]="make -j1 -C 'driver/build'"
CLEAN[0]="make -j1 -C 'driver/build' clean"
# Placing the DKMS generated module in a different location than the standard install prevents conflicts when PKGBUILD _opt_DKMS is toggled
DEST_MODULE_LOCATION[0]="/kernel/drivers/misc"
EOF
    ) "${_dkms}/dkms.conf"
    install -dm755 "${_dkms}/driver/build/"
    cp -pr 'driver/build/' "${_dkms}/driver/"
    cp -pr 'commoninc/' "${_dkms}/"
    install -pm644 'Makefile.inc' -t "${_dkms}/"
    sed -e 's:/usr/lib/modules/[^/]\+/:/usr/lib/modules/$(KERNELRELEASE)/:g' \
       -i "${_dkms}/driver/build/Makefile"
    make -C "${_dkms}/driver/build/" clean
  fi
  set +u
}

set +u
