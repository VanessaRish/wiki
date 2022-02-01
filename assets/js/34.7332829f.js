(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{433:function(e,a,t){"use strict";t.r(a);var n=t(56),r=Object(n.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"almalinux-8-3-rc-release-notes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#almalinux-8-3-rc-release-notes"}},[e._v("#")]),e._v(" AlmaLinux 8.3 RC release notes")]),e._v(" "),t("p",[e._v("Distributed kernel version: 4.18.0-240.")]),e._v(" "),t("h2",{attrs:{id:"installation-instructions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation-instructions"}},[e._v("#")]),e._v(" Installation instructions")]),e._v(" "),t("p",[e._v("There are three installation ISO images available:")]),e._v(" "),t("p",[t("code",[e._v("AlmaLinux-8.3-rc-1-x86_64-boot.iso")]),e._v(" - a single network installation CD image\nthat downloads packages over the Internet.")]),e._v(" "),t("p",[t("code",[e._v("AlmaLinux-8.3-rc-1-x86_64-minimal.iso")]),e._v(" - a minimal self-containing DVD image\nthat makes possible offline installation.")]),e._v(" "),t("p",[t("code",[e._v("AlmaLinux-8.3-rc-1-x86_64-dvd1.iso")]),e._v(" - a full installation DVD image that\ncontains mostly all AlmaLinux packages.")]),e._v(" "),t("p",[e._v("Select a mirror listed on the\n"),t("a",{attrs:{href:"https://mirrors.almalinux.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("mirrors.almalinux.org"),t("OutboundLink")],1),e._v(" website (please,\ndon't use the "),t("code",[e._v("repo.almalinux.org")]),e._v(" host directly) and download a suitable ISO\nimage from the "),t("code",[e._v("8.3-rc/isos/x86_64/")]),e._v(" directory, for example:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v(" https://mirror.interserver.net/almalinux/8.3-rc/isos/x86_64/AlmaLinux-8.3-rc-1-x86_64-boot.iso\n")])])]),t("p",[e._v("Download and import the AlmaLinux public key:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v(" https://repo.almalinux.org/almalinux/RPM-GPG-KEY-AlmaLinux\n$ gpg --import RPM-GPG-KEY-AlmaLinux\n")])])]),t("p",[e._v("Download and verify a checksums list:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v(" https://repo.almalinux.org/almalinux/8.3-rc/isos/x86_64/CHECKSUM\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# we are looking for “Good signature” ")]),e._v("\n$ gpg --verify CHECKSUM \n  gpg: Signature made Fri "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("19")]),e._v(" Feb "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2021")]),e._v(" 03:04:44 PM MSK\n  gpg:                using RSA key 51D6647EC21AD6EA\n  gpg: Good signature from "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"AlmaLinux <packager@almalinux.org>"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("unknown"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n  gpg: WARNING: This key is not certified with a trusted signature"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v("\n  gpg:          There is no indication that the signature belongs to the owner.\n  Primary key fingerprint: 5E9B 8F56 17B5 066C E920  57C3 488F CF7C 3ABB 34F8\n       Subkey fingerprint: E53C F5EF 91CE B0AD "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1812")]),e._v("  ECB8 51D6 647E C21A D6EA\n")])])]),t("p",[e._v("Verify the downloaded ISO image checksum:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# calculate the downloaded ISO SHA256 checksum")]),e._v("\n$ sha256sum AlmaLinux-8.3-rc-1-x86_64-boot.iso \n1bf9bff6af3413f8f273e54c11fb45f7da63afea670eafc50dde22c45582be7a  AlmaLinux-8.3-rc-1-x86_64-boot.iso\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# compare it with expected checksum, it should be the same")]),e._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" CHECKSUM "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("grep")]),e._v(" -E "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'SHA256.*AlmaLinux-8.3-rc-1-x86_64-boot.iso'")]),e._v("\nSHA256 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("AlmaLinux-8.3-rc-1-x86_64-boot.iso"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" 1bf9bff6af3413f8f273e54c11fb45f7da63afea670eafc50dde22c45582be7a\n")])])]),t("p",[e._v("If you decided to use the "),t("code",[e._v("AlmaLinux-8.3-rc-1-x86_64-boot.iso")]),e._v(" image, you will\nneed to provide the "),t("code",[e._v("8.3-rc/BaseOS/x86_64/kickstart/")]),e._v(" repository from the\nselected mirror as the Installation Source.")]),e._v(" "),t("p",[e._v("There are no extra Installation Sources required if you decided to go with\neither minimal or dvd ISO images.")]),e._v(" "),t("h2",{attrs:{id:"upgrade-instructions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-instructions"}},[e._v("#")]),e._v(" Upgrade instructions")]),e._v(" "),t("p",[e._v("Upgrade the almalinux-release package to the 8.3-3.el8 version from the beta\nrepositories:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ dnf clean all "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" dnf upgrade -y almalinux-release\n")])])]),t("p",[e._v("the new package contains updated repository URLs so that you can just run:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ dnf upgrade -y\n")])])]),t("p",[e._v("to update the rest of the packages.")]),e._v(" "),t("h2",{attrs:{id:"changelog"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),t("ul",[t("li",[e._v("The dnf package manager now uses AlmaLinux public mirrors by default. The\ncurrent list of public mirrors can be found on the\n"),t("a",{attrs:{href:"https://mirrors.almalinux.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("mirrors.almalinux.org"),t("OutboundLink")],1),e._v(" website.")]),e._v(" "),t("li",[e._v("The "),t("code",[e._v("HighAvailability")]),e._v(" repo is added. It’s disabled by default and can be\nenabled by the "),t("code",[e._v("dnf config-manager --set-enabled ha command")]),e._v("\n("),t("a",{attrs:{href:"https://bugs.almalinux.org/view.php?id=16",target:"_blank",rel:"noopener noreferrer"}},[e._v("ambz#16"),t("OutboundLink")],1),e._v(").")]),e._v(" "),t("li",[e._v("The "),t("code",[e._v("subscription-manager")]),e._v(" package and its dependencies added\n("),t("a",{attrs:{href:"https://bugs.almalinux.org/view.php?id=5",target:"_blank",rel:"noopener noreferrer"}},[e._v("almbz#5"),t("OutboundLink")],1),e._v(").")]),e._v(" "),t("li",[e._v("The "),t("code",[e._v("satellite-5-client")]),e._v(" module moved from the "),t("code",[e._v("BaseOS")]),e._v(" to the "),t("code",[e._v("AppStream")]),e._v("\nrepository ("),t("a",{attrs:{href:"https://bugs.almalinux.org/view.php?id=4",target:"_blank",rel:"noopener noreferrer"}},[e._v("almbz#4"),t("OutboundLink")],1),e._v(").")]),e._v(" "),t("li",[e._v("Fixed issues with the "),t("code",[e._v("php:7.4")]),e._v(" and "),t("code",[e._v("nodejs:12")]),e._v(" modules installation\n("),t("a",{attrs:{href:"https://bugs.almalinux.org/view.php?id=9",target:"_blank",rel:"noopener noreferrer"}},[e._v("almbz#9"),t("OutboundLink")],1),e._v(").")]),e._v(" "),t("li",[e._v("Added "),t("code",[e._v("maven:3.6")]),e._v(" and "),t("code",[e._v("jmc:rhel8")]),e._v(" modules.")]),e._v(" "),t("li",[e._v("Completed the "),t("code",[e._v("perl:5.30")]),e._v(" module build.")]),e._v(" "),t("li",[e._v("The "),t("code",[e._v("/usr/lib/rpm/redhat/dist.sh")]),e._v(" utility is now aware of AlmaLinux\n("),t("a",{attrs:{href:"https://bugs.almalinux.org/view.php?id=17",target:"_blank",rel:"noopener noreferrer"}},[e._v("almbz#17"),t("OutboundLink")],1),e._v(").")]),e._v(" "),t("li",[e._v("Added the "),t("code",[e._v("almalinux")]),e._v(" RPM macros\n("),t("a",{attrs:{href:"https://bugs.almalinux.org/view.php?id=22",target:"_blank",rel:"noopener noreferrer"}},[e._v("almbz#22"),t("OutboundLink")],1),e._v(").")]),e._v(" "),t("li",[e._v("The "),t("code",[e._v("libreport-almalinux")]),e._v(" package is added to support automatic bug\nreporting to "),t("a",{attrs:{href:"https://bugs.almalinux.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("bugs.almalinux.org"),t("OutboundLink")],1),e._v("\n("),t("a",{attrs:{href:"https://bugs.almalinux.org/view.php?id=2",target:"_blank",rel:"noopener noreferrer"}},[e._v("almbz#2"),t("OutboundLink")],1),e._v(")")]),e._v(" "),t("li",[e._v("All installation environments are now available during network install\n("),t("a",{attrs:{href:"https://bugs.almalinux.org/view.php?id=14",target:"_blank",rel:"noopener noreferrer"}},[e._v("almbz#14"),t("OutboundLink")],1),e._v(")")]),e._v(" "),t("li",[e._v("The debuginfo repositories are now populated with packages.")])]),e._v(" "),t("h2",{attrs:{id:"known-issues"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#known-issues"}},[e._v("#")]),e._v(" Known issues")]),e._v(" "),t("ul",[t("li",[e._v("There is no SecureBoot support in this release\n("),t("a",{attrs:{href:"https://bugs.almalinux.org/view.php?id=3",target:"_blank",rel:"noopener noreferrer"}},[e._v("almbz#3"),t("OutboundLink")],1),e._v("). We are doing our\nbest to have it in a stable release.")]),e._v(" "),t("li",[e._v("The Minimal ISO proposes to install "),t("code",[e._v("Server environment with GNOME")]),e._v(" but\nactually can only install "),t("code",[e._v("Minimal Install")]),e._v(" environment\n("),t("a",{attrs:{href:"https://bugs.almalinux.org/view.php?id=14",target:"_blank",rel:"noopener noreferrer"}},[e._v("almbz#14"),t("OutboundLink")],1),e._v(").")]),e._v(" "),t("li",[e._v('The mirrors support implemented with help of the DNF fastestmirror plugin\nthat is known to be a bit "quirky". We are going to switch to\ngeo-location-based mirror selection in the stable version.')])])])}),[],!1,null,null,null);a.default=r.exports}}]);