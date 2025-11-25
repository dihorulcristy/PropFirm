import re

# Read the file
with open(r'c:\Users\hergh\Desktop\PropFirmHub\app\components\ComparisonTable.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Step 1: Add marketType to interface
content = content.replace(
    "    challengeType: '2-Step' | '1-Step' | 'Instant';\r\n    instantFunding: boolean;",
    "    challengeType: '2-Step' | '1-Step' | 'Instant';\r\n    marketType: 'forex' | 'futures';\r\n    instantFunding: boolean;"
)

# Step 2: Add marketType: 'forex' after each challengeType line in firm data
# Pattern: find "challengeType: '...'," and add marketType after it
pattern = r"(challengeType: '[^']+',)\r\n(        instantFunding:)"
replacement = r"\1\r\n        marketType: 'forex',\r\n\2"
content = re.sub(pattern, replacement, content)

# Write back
with open(r'c:\Users\hergh\Desktop\PropFirmHub\app\components\ComparisonTable.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ Successfully added marketType to Firm interface and all 9 firms!")
